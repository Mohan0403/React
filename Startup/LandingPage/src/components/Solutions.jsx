import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      category: 'Finance',
      title: 'Automated Invoice Processing',
      description: 'Streamline AP/AR workflows with intelligent automation.',
      color: '#0a2463'
    },
    {
      category: 'HR',
      title: 'Employee Onboarding',
      description: 'Create seamless onboarding experiences for new hires.',
      color: '#3e78b2'
    },
    {
      category: 'IT',
      title: 'IT Service Management',
      description: 'Automate ticketing and IT service workflows.',
      color: '#4a9fff'
    },
    {
      category: 'Operations',
      title: 'Supply Chain Optimization',
      description: 'Monitor and optimize your supply chain in real-time.',
      color: '#0a2463'
    }
  ];
  
  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Industry Solutions</h2>
          <p className="section-subtitle">
            Tailored solutions for your industry's unique challenges.
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="solution-card"
              style={{ borderTop: `5px solid ${solution.color}` }}
            >
              <span className="solution-category">{solution.category}</span>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <a href="#learn-more" className="solution-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;