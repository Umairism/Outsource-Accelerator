import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Transform your business with skilled offshore talent
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of companies that have successfully scaled their operations while reducing costs
        </p>
        <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default CTASection;