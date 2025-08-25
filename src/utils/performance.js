// Performance utilities for mobile optimization

/**
 * Lazy loading observer for images
 */
export const createImageObserver = () => {
  if (!('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Load the actual image
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        // Load srcset if available
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
          img.removeAttribute('data-srcset');
        }
        
        // Add loaded class for animations
        img.classList.add('loaded');
        
        // Stop observing this image
        observer.unobserve(img);
      }
    });
  }, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  });
};

/**
 * Optimize image loading with lazy loading
 */
export const optimizeImage = (imgElement) => {
  if (!imgElement) return;
  
  // Add loading attribute for native lazy loading
  imgElement.loading = 'lazy';
  
  // Add decoding attribute for better performance
  imgElement.decoding = 'async';
  
  // Add intersection observer fallback
  const observer = createImageObserver();
  if (observer) {
    observer.observe(imgElement);
  }
};

/**
 * Preload critical images
 */
export const preloadImage = (src, priority = 'high') => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = priority;
    
    link.onload = () => resolve(src);
    link.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    
    document.head.appendChild(link);
  });
};

/**
 * Performance observer for monitoring
 */
export const setupPerformanceMonitoring = () => {
  if (!('PerformanceObserver' in window)) {
    return;
  }

  // Monitor Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  });

  // Monitor First Input Delay
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  });

  // Monitor Cumulative Layout Shift
  const clsObserver = new PerformanceObserver((list) => {
    let clsValue = 0;
    const entries = list.getEntries();
    
    entries.forEach(entry => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    
    console.log('CLS:', clsValue);
  });

  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    fidObserver.observe({ entryTypes: ['first-input'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.log('Performance observer not supported');
  }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if device is mobile
 */
export const isMobile = () => {
  return window.innerWidth <= 768 || 
         ('ontouchstart' in window) || 
         (navigator.maxTouchPoints > 0);
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get device pixel ratio for high DPI displays
 */
export const getDevicePixelRatio = () => {
  return window.devicePixelRatio || 1;
};

/**
 * Optimize animations based on device capabilities
 */
export const optimizeAnimations = () => {
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  const isSlowConnection = navigator.connection && 
    (navigator.connection.effectiveType === 'slow-2g' || 
     navigator.connection.effectiveType === '2g');

  if (isLowEndDevice || isSlowConnection || prefersReducedMotion()) {
    document.documentElement.classList.add('reduce-animations');
  }
};

/**
 * Critical resource hints
 */
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      if (key === 'crossorigin') {
        link.crossOrigin = value;
      } else {
        link[key] = value;
      }
    });
    document.head.appendChild(link);
  });
};

/**
 * Initialize all performance optimizations
 */
export const initPerformanceOptimizations = () => {
  // Setup performance monitoring
  setupPerformanceMonitoring();
  
  // Optimize animations based on device
  optimizeAnimations();
  
  // Add resource hints
  addResourceHints();
  
  // Setup image lazy loading for existing images
  const images = document.querySelectorAll('img[data-src]');
  const observer = createImageObserver();
  
  if (observer) {
    images.forEach(img => observer.observe(img));
  }
  
  console.log('Performance optimizations initialized');
};

export default {
  createImageObserver,
  optimizeImage,
  preloadImage,
  setupPerformanceMonitoring,
  debounce,
  throttle,
  isMobile,
  prefersReducedMotion,
  getDevicePixelRatio,
  optimizeAnimations,
  addResourceHints,
  initPerformanceOptimizations
};
