import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
     
      title: 'No-Code Platform',
      description: 'Build and customize workflows without writing a single line of code.'
    },
    {
     
      title: 'System Integration',
      description: 'Connect seamlessly with your existing tools and databases.'
    },
    {
      
      title: 'Advanced Analytics',
      description: 'Gain insights into your operations with real-time dashboards.'
    },
    {
      
      title: 'People-First Design',
      description: 'Intuitive interface that empowers every team member.'
    },
    {
     
      title: 'Process Automation',
      description: 'Automate repetitive tasks and focus on strategic work.'
    },
    {
      
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance for all major standards.'
    }
  ];
  
  return (
    <section id="platform" className="section features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose OperaFlow?</h2>
          <p className="section-subtitle">
            Our platform is designed to adapt to your unique business needs,
            providing the flexibility and power to transform your operations.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;