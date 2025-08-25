import React, { useEffect, useRef, useState } from 'react';
import { optimizeImage, preloadImage, getDevicePixelRatio } from '../../utils/performance';

/**
 * OptimizedImage Component
 * Provides lazy loading, responsive images, and performance optimizations
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  style = {},
  priority = false,
  responsive = true,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  sizes,
  srcSet,
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  ...props
}) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Apply optimizations
    optimizeImage(img);

    // Preload if priority
    if (priority) {
      preloadImage(src, 'high')
        .then(() => setCurrentSrc(src))
        .catch(() => setHasError(true));
    } else {
      // Setup intersection observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSrc(src);
              observer.unobserve(img);
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      observer.observe(img);

      return () => {
        observer.unobserve(img);
      };
    }
  }, [src, priority]);

  // Generate responsive srcSet if not provided
  const generateSrcSet = (baseSrc) => {
    if (srcSet) return srcSet;
    if (!responsive) return undefined;

    const pixelRatio = getDevicePixelRatio();
    const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const extension = extensions.find(ext => baseSrc.toLowerCase().includes(ext));
    
    if (!extension) return undefined;

    const baseName = baseSrc.replace(extension, '');
    return `
      ${baseName}-320w${extension} 320w,
      ${baseName}-640w${extension} 640w,
      ${baseName}-960w${extension} 960w,
      ${baseName}-1280w${extension} 1280w,
      ${baseName}-1920w${extension} 1920w
    `.trim();
  };

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  const imageClasses = [
    className,
    'optimized-image',
    isLoaded ? 'loaded' : 'loading',
    hasError ? 'error' : ''
  ].filter(Boolean).join(' ');

  const imageStyles = {
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0.7,
    ...style
  };

  if (hasError) {
    return (
      <div
        className={`${className} image-error`}
        style={{
          ...style,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          fontSize: '14px',
          minHeight: '100px'
        }}
        {...props}
      >
        Image failed to load
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={imageClasses}
      style={imageStyles}
      loading={loading}
      decoding={decoding}
      sizes={sizes || (responsive ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : undefined)}
      srcSet={generateSrcSet(src)}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

// HOC for existing images to add optimization
export const withOptimization = (WrappedComponent) => {
  return React.forwardRef((props, ref) => {
    return <WrappedComponent ref={ref} {...props} component={OptimizedImage} />;
  });
};

// CSS for the optimized image component
export const optimizedImageStyles = `
.optimized-image {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.optimized-image.loading {
  opacity: 0.7;
}

.optimized-image.loaded {
  opacity: 1;
}

.optimized-image.error {
  opacity: 0.5;
  filter: grayscale(100%);
}

/* Reduce animations on low-end devices */
.reduce-animations .optimized-image {
  transition: none;
}

/* Responsive image container */
.responsive-image-container {
  position: relative;
  overflow: hidden;
}

.responsive-image-container::before {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.responsive-image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Performance optimizations for mobile */
@media (max-width: 768px) {
  .optimized-image {
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: -webkit-optimize-contrast;
  }
}

/* High DPI display optimizations */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .optimized-image {
    image-rendering: auto;
  }
}
`;

export default OptimizedImage;
