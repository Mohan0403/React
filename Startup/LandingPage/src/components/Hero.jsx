import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            The OS for
            <span className="hero-title-highlight"> Business Operations</span>
          </h1>
          <p className="hero-subtitle">
            Empower your operations teams with an adaptive, no-code
            platform to optimize your unique mix of processes,
            people, and systems.
          </p>
          <div className="hero-actions">
            <a href="#get-started" className="btn btn-primary btn-large">
              Get Started
            </a>
            <a href="#demo" className="btn btn-outline btn-large">
              Watch Demo
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="dashboard-preview">
            <div className="dashboard-card card-1">
              <div className="card-header">
                <div className="card-dot red"></div>
                <div className="card-dot yellow"></div>
                <div className="card-dot green"></div>
              </div>
              <div className="card-content">
                <div className="metric">
                  <h3>45%</h3>
                  <p>Faster Process Execution</p>
                </div>
                <div className="chart"></div>
              </div>
            </div>
            <div className="dashboard-card card-2">
              <div className="card-header">
                <div className="card-dot red"></div>
                <div className="card-dot yellow"></div>
                <div className="card-dot green"></div>
              </div>
              <div className="card-content">
                <div className="metric">
                  <h3>67%</h3>
                  <p>Reduced Manual Work</p>
                </div>
                <div className="chart"></div>
              </div>
            </div>
            <div className="dashboard-card card-3">
              <div className="card-header">
                <div className="card-dot red"></div>
                <div className="card-dot yellow"></div>
                <div className="card-dot green"></div>
              </div>
              <div className="card-content">
                <div className="process-flow">
                  <div className="flow-step">Start</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Process</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Approve</div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;