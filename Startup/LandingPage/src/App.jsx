import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Customers from './components/Customers';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Customers />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;