import React from 'react';
import { ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-purple-100/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
          alt="Digital Marketing Background"
          className="w-full h-full object-cover opacity-20 scale-110 animate-float"
        />
      </div>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text transform transition-all duration-700 hover:scale-105">
          RGI Creation
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          Transforming Brands Through Compelling Social Stories
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          <a
            href="#work"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-purple-200 group"
          >
            View Our Work
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200"
          >
            Our Services
          </a>
        </div>
        <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-600" />
        </a>
      </div>
    </header>
  );
}

export default Hero;