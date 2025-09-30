import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2784DA] via-[#4a9eff] to-[#758711] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-40 w-24 h-24 bg-white bg-opacity-15 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-20 h-20 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-white bg-opacity-8 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-16">
          {/* Left side - Text content */}
          <div className={`text-white space-y-6 lg:space-y-8 max-w-2xl transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-shrimp font-bold leading-tight text-white animate-pulse">
                SHRIMP
                <br />
                <span className="text-shrimp-orange">SENSE</span>
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-white animate-fadeIn">
              WELCOME TO OUR SHRIMPY WEBSITE!
            </h2>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white text-justify opacity-90">
              Shrimp farming meets innovation with an intelligent monitoring system that combines computer vision, deep
              learning, and real-time data collection. Designed with a flow-based setup and mounted camera, it accurately
              counts and tracks shrimp biomass while optimizing feeding efficiency. The result is smarter aquaculture
              management-sustainable, precise, and future-ready.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-shrimp-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold text-lg hover:scale-105 shadow-lg hover:shadow-xl transform">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300 font-semibold text-lg hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Enhanced shrimp animation */}
          <div className={`relative flex-shrink-0 transition-all duration-1000 delay-300 transform mr-16 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            {/* Stage for positioning the two GIFs horizontally */}
            <div className="relative w-[320px] h-[200px] sm:w-[480px] sm:h-[280px] lg:w-[600px] lg:h-[320px]
           ml-[48px] sm:ml-[96px] lg:ml-[160px]">
              {/* Left shrimp - positioned farther left, facing right */}
              <img
                src="/shrimp.gif"
                alt="Animated Shrimp Left"
                className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-contain
                           -left-3 top-[20%] -translate-y-[20%]
                           -rotate-[150deg] hover:scale-110 transition-transform duration-500 animate-bounce"
              />

              {/* Right shrimp - positioned farther right, facing left */}
              <img
                src="/shrimp.gif"
                alt="Animated Shrimp Right"
                className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-contain
                           right-1 top-[10%] -translate-y-[20%]
                           -rotate-[-30deg] hover:scale-110 transition-transform duration-500 animate-bounce"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
