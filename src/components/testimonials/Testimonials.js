import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Padula Guruge",
      title: "Senior Software Engineer at Ascentic",
      text: "Working with Sachin on the Water Villa World project has been excellent. The UI/UX design is clean, modern, and user-friendly, making it easy for travelers to navigate and book their stays. The visuals and color scheme effectively convey luxury and tranquility. The booking process is seamless, and the site is responsive and accessible across various devices. Sachin's attention to detail and focus on user experience are outstanding. This design will undoubtedly enhance customer engagement and satisfaction.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      verified: true,
      rating: 5
    },
    {
      id: 2,
      name: "Hoshan Kalana Abeysiriwardana",
      title: "Senior Web Developer at Enfection",
      text: "Sachin's redesign of our website has greatly enhanced its functionality and appeal. As a UK-based non-profit working with Theravada Buddhist monks, academics, and scholars, our mission to provide a communal platform and repository for Theravada Buddhist texts and cultural articles is now more effectively realized. The new design is user-friendly and visually appealing, making our resources more accessible to the public and beneficial to the broader artistic development of Buddhist culture. Sachin's work has been invaluable in advancing our mission.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      verified: true,
      rating: 5
    },
    {
      id: 3,
      name: "Ravindu Kanishka",
      title: "Freelance Video Editor",
      text: "Sachin's assistance in creating social media posts has been outstanding. As a freelance video editor, having visually engaging and professional posts is crucial, and Sachin delivered exactly that. His creativity and attention to detail have significantly improved my online presence. I highly recommend his work.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      verified: true,
      rating: 5
    },
    {
      id: 4,
      name: "Marla Wilson",
      title: "Project Manager",
      text: "Sachin was an incredible resource for us when building our membership site. His attention to detail, vast knowledge, and quick responses made the whole experience so easy. I highly recommend working with Sachin and would be happy to collaborate with him again should another project come up.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/14f42751b6d32da0454223812c3216607fba39a8?width=84",
      verified: false,
      rating: 5
    },
    {
      id: 5,
      name: "Matt D'Avella",
      title: "Content Creator",
      text: "Sachin was an absolute game-changer when it came to building my website. From start to finish, he was incredibly helpful and knowledgeable. The process was smooth and fast, but never rushed. Sachin's attention to detail and design expertise made the site even better than I had envisioned. He was also a pleasure to work with, always professional, friendly, and proactive. I highly recommend Sachin to anyone looking for a seamless and top-notch web design experience. 10/10!",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3b20df071dd4ba86e07391417fa8d954d357ae6a?width=84",
      verified: false,
      rating: 5
    },
    {
      id: 6,
      name: "Gaurav Ahluwalia",
      title: "Business Owner",
      text: "Sachin is great to work with - extremely quick to respond and improvements to our website are always made to a high standard. Highly recommend his services!",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ee3cfb5053820b8839d8eb3598ee0ab37fc70ae0?width=84",
      verified: true,
      rating: 5
    },
    {
      id: 7,
      name: "Blake Hampton",
      title: "Entrepreneur",
      text: "Worked with Sachin on some custom code for my website and I'm super happy with the result. Fast turnaround time, responsive communication and quality output!",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/63e0d99fe7f46de9701e2836660333043886f546?width=84",
      verified: true,
      rating: 5
    },
    {
      id: 8,
      name: "Jeff Smith",
      title: "CEO",
      text: "Sachin's attention to detail put him above the rest. I was traveling and the business was in the process of being acquired while we were building and it never slowed him down!",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/44fed97061ad89afd7bfd0263f2d83e30d9b1c50?width=84",
      verified: true,
      rating: 5
    },
    {
      id: 9,
      name: "Nathan Bethell",
      title: "Marketing Director",
      text: "Sachin is a top person to work with! No ego, no B/S, just high quality professionalism and delivery of sites and content that work. If you're in the market for a professional website then you can't go wrong!",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/a5bbd825b51951f324caafa36ed87672b409bfee?width=84",
      verified: true,
      rating: 5
    },
    {
      id: 10,
      name: "Jack Schiavone",
      title: "Startup Founder",
      text: "Sachin and the team gave me everything I was looking for with the website build. Alongside their attention to detail was the speed of their support. I couldn't recommend Sachin more, especially for anyone who wants a website that converts leads into customers. Thanks!",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/0b2b8b0fa196e73cab4d412f5bfd809af45f5aa0?width=84",
      verified: true,
      rating: 5
    },
    {
      id: 11,
      name: "Elliot Napier",
      title: "Product Manager",
      text: "Exceptional communication throughout the process, very prompt updates to the site made it very easy to iterate & determine the final design, content & style. Really happy with the finished product, would highly recommend to anyone looking to get an excellent website to help their brand / product stand out.",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/de2ba8f198755012ab5ce39bf8290a12cd6b5da8?width=84",
      verified: true,
      rating: 5
    }
  ];

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0.5L9.65601 6.04678L15.4432 5.90773L10.6796 9.19674L12.6003 14.6574L8 11.1434L3.39974 14.6574L5.32041 9.19674L0.556835 5.90773L6.34399 6.04678L8 0.5Z" fill="#506C83"/>
    </svg>
  );

  const VerifiedIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.3335 15.0005L4.06683 12.8672L1.66683 12.3338L1.90016 9.86719L0.266836 8.00052L1.90016 6.13385L1.66683 3.66719L4.06683 3.13385L5.3335 1.00052L7.60016 1.96719L9.86683 1.00052L11.1335 3.13385L13.5335 3.66719L13.3002 6.13385L14.9335 8.00052L13.3002 9.86719L13.5335 12.3338L11.1335 12.8672L9.86683 15.0005L7.60016 14.0338L5.3335 15.0005ZM7.06683 10.6672L10.8335 6.90052L9.90016 5.96719L7.06683 8.80052L5.6335 7.40052L4.70016 8.33385L7.06683 10.6672Z" fill="#506C83"/>
    </svg>
  );

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-container">
          <div className="testimonials-badge">
            <div className="badge-dot"></div>
            <span>Testimonials</span>
          </div>
          
          <h2 className="testimonials-title">Over 200+ Reviews</h2>
          
          <button className="view-all-btn">
            View all
          </button>
        </div>
      </div>

      <div className="testimonials-content">
        <div className="testimonials-slider">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card ${index % 2 === 1 ? 'card-offset' : ''}`}>
                <div className="card-header">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="avatar"
                  />
                  
                  <div className="user-info">
                    <div className="user-details">
                      <div className="user-name">{testimonial.name}</div>
                      {testimonial.title && (
                        <div className="user-title">{testimonial.title}</div>
                      )}
                    </div>
                    {testimonial.verified && (
                      <div className="verified-badge">
                        <VerifiedIcon />
                      </div>
                    )}
                  </div>
                  
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-text">
                  {testimonial.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
      </div>
    </section>
  );
};

export default Testimonials;
