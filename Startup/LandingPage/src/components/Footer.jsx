import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    Product: ['Platform', 'Solutions', 'Integrations', 'Pricing'],
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Support'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">OperaFlow</span>
            </div>
            <p className="footer-description">
              The operating system for modern business operations.
              Empowering teams to work smarter, faster, and more efficiently.
            </p>
            <div className="social-links">
              <a href="#twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#linkedin" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#github" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#youtube" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="link-category">
                <h4 className="link-title">{category}</h4>
                <ul className="link-list">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} OperaFlow. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;