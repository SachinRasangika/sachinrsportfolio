import React from 'react';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      id: '01',
      title: 'Client onboarding & design',
      description: "Book a discovery call to discuss your vision and see if we're a perfect match. Afterwards, you'll receive a detailed proposal outlining the scope of work, deliverables, timeline, and pricing.",
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/d17c898f2d771234f761a18260725a6620f88bdb?width=871',
      icon: (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_2568)">
            <path d="M2 10.9399H13" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 10.9399H30" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13.9399C17.6569 13.9399 19 12.5968 19 10.9399C19 9.28309 17.6569 7.93994 16 7.93994C14.3431 7.93994 13 9.28309 13 10.9399C13 12.5968 14.3431 13.9399 16 13.9399Z" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 25.9399C6.65685 25.9399 8 24.5968 8 22.9399C8 21.283 6.65685 19.9399 5 19.9399C3.34315 19.9399 2 21.283 2 22.9399C2 24.5968 3.34315 25.9399 5 25.9399Z" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27 25.9399C28.6569 25.9399 30 24.5968 30 22.9399C30 21.283 28.6569 19.9399 27 19.9399C25.3431 19.9399 24 21.283 24 22.9399C24 24.5968 25.3431 25.9399 27 25.9399Z" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.9727 11.3462C20.9534 11.9037 22.7385 13.0047 24.1255 14.5247C25.5124 16.0447 26.4459 17.9229 26.8202 19.9463" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.17969 19.9463C5.55403 17.9229 6.48758 16.0449 7.87456 14.5249C9.26153 13.0049 11.0465 11.9038 13.0272 11.3462" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_4_2568">
              <rect width="32" height="32" fill="white" transform="translate(0 0.939941)"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      id: '02', 
      title: 'Development and feedback',
      description: (
        <>
          Once we agree on the scope and you accept the proposal, the website build begins. Using{' '}
          <a href="#" className="process-link">markup.io</a>, you can provide feedback easily, ensuring a seamless and collaborative process from start to finish.
        </>
      ),
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4eb79c43c6fa7c68c836c61a355505938988588e?width=871',
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_2591)">
            <path d="M8.33008 11.9399L2.33008 16.9399L8.33008 21.9399" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.3301 11.9399L30.3301 16.9399L24.3301 21.9399" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.3301 5.93994L12.3301 27.9399" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_4_2591">
              <rect width="32" height="32" fill="white" transform="translate(0.330078 0.939941)"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      id: '03',
      title: 'Handover training',
      description: "Upon your approval of the finished website, you'll receive bespoke handover training via a recorded Loom link. Plus, enjoy 30 days of free email support to help you transition smoothly.",
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/8ec8781edb44817c6249b6844935d52668e779a9?width=871',
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_2606)">
            <path d="M24.6602 8.93994H4.66016C4.10788 8.93994 3.66016 9.38766 3.66016 9.93994V23.9399C3.66016 24.4922 4.10788 24.9399 4.66016 24.9399H24.6602C25.2125 24.9399 25.6602 24.4922 25.6602 23.9399V9.93994C25.6602 9.38766 25.2125 8.93994 24.6602 8.93994Z" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25.6602 14.9399L31.6602 10.9399V22.9399L25.6602 18.9399" stroke="#181A1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_4_2606">
              <rect width="32" height="32" fill="white" transform="translate(0.660156 0.939941)"/>
            </clipPath>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="process">
      <div className="process-container">
        {processSteps.map((step, index) => (
          <div key={index} className="process-card">
            <div className="step-number">{step.id}</div>
            
            <div className="process-icon">
              {step.icon}
            </div>
            
            <h3 className="process-title">{step.title}</h3>
            
            <div className="process-description">
              {typeof step.description === 'string' ? (
                <p>{step.description}</p>
              ) : (
                <p>{step.description}</p>
              )}
            </div>
            
            <div className="process-image">
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
