import React from 'react';
import './Customers.css';

const Customers = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'COO, TechGlobal Inc.',
      content: 'OperaFlow transformed how we manage operations. We reduced process time by 65% in just three months.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, InnovateCorp',
      content: 'The no-code platform empowered our team to build solutions without waiting for IT resources.',
      avatar: 'MC'
    },
    {
      name: 'Jessica Williams',
      role: 'VP Operations, GrowthLabs',
      content: 'Finally, a platform that understands the needs of modern business operations. Highly recommended!',
      avatar: 'JW'
    }
  ];
  
  const companies = ['TechGlobal', 'InnovateCorp', 'GrowthLabs', 'NextGen', 'FutureScale', 'VisionaryCo'];
  
  return (
    <section id="customers" className="section customers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            Join thousands of companies that have transformed their operations with OperaFlow.
          </p>
        </div>
        
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="companies">
          <div className="companies-title">Our Customers Include:</div>
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div key={index} className="company-logo">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;