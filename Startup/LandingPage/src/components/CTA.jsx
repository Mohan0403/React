import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Operations?</h2>
          <p className="cta-subtitle">
            Join thousands of companies that have streamlined their processes with OperaFlow.
            Start your free trial today.
          </p>
          <div className="cta-actions">
            <a href="#get-started" className="btn btn-primary btn-large">
              Start Free Trial
            </a>
            <a href="#demo" className="btn btn-outline btn-large">
              Schedule a Demo
            </a>
          </div>
          <div className="cta-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Free 14-day trial</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Full platform access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;