import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Save up to <span className="text-blue-600">70%</span> on staffing costs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with trusted offshore partners and transform your business with skilled talent from around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/get-quotes" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
            >
              Get 3 Free Quotes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/book-call" 
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;