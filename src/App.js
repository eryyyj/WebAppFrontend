import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <HeroSection />
              <FeaturesSection />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={
            <>
              <Navigation />
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                  <p className="text-lg text-gray-600">Learn more about Shrimp Sense and our innovative shrimp farming technology.</p>
                </div>
              </div>
            </>
          } />
          <Route path="/products" element={
            <>
              <Navigation />
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
                  <p className="text-lg text-gray-600">Discover our range of intelligent shrimp monitoring solutions.</p>
                </div>
              </div>
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navigation />
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                  <p className="text-lg text-gray-600">Get in touch with our team for support and inquiries.</p>
                </div>
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
