import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Padula Guruge",
      title: "Senior Software Engineer at Ascentic",
      text: "Working with Sachin on the Water Villa World project has been excellent. The UI/UX design is clean, modern, and user-friendly, making it easy for travelers to navigate and book their stays. The visuals and color scheme effectively convey luxury and tranquility. The booking process is seamless, and the site is responsive and accessible across various devices. Sachin's attention to detail and focus on user experience are outstanding. This design will undoubtedly enhance customer engagement and satisfaction.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFxotWcQJiQ2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683976965433?e=1759363200&v=beta&t=tzHp0fmqcGtzHCHk1PvLjTO8VYt7RQ96W6sTOMBqTUk",
      verified: true,
      rating: 5
    },
    {
      id: 2,
      name: "Hoshan Kalana Abeysiriwardana",
      title: "Senior Web Developer at Enfection",
      text: "Sachin's redesign of our website has greatly enhanced its functionality and appeal. As a UK-based non-profit working with Theravada Buddhist monks, academics, and scholars, our mission to provide a communal platform and repository for Theravada Buddhist texts and cultural articles is now more effectively realized. The new design is user-friendly and visually appealing, making our resources more accessible to the public and beneficial to the broader artistic development of Buddhist culture. Sachin's work has been invaluable in advancing our mission.",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQGiLFnVES2U6g/profile-framedphoto-shrink_800_800/B56ZX3Q6zzHQAg-/0/1743610163203?e=1756857600&v=beta&t=FtQzJxyDxwdCYwRL7ardx2NYH3F8xn6MtstiNx_Z3K0",
      verified: true,
      rating: 5
    },
    {
      id: 3,
      name: "Ravindu Kanishka",
      title: "Freelance Video Editor",
      text: "Sachin's assistance in creating social media posts has been outstanding. As a freelance video editor, having visually engaging and professional posts is crucial, and Sachin delivered exactly that. His creativity and attention to detail have significantly improved my online presence. I highly recommend his work.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFWa0KUCS2PGA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684086857448?e=1759363200&v=beta&t=Ai03ABsyKIP6JwBdMdihTa6TED5OL2F3VMavjZODscQ",
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
          
          <h2 className="testimonials-title">Client Reviews</h2>
          
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
