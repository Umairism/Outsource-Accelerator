import React from 'react';
import { FileText, Headphones, Building } from 'lucide-react';

const ContentHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your trusted outsourcing resource
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive insights and verified partners to guide your outsourcing journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
            <div className="text-gray-700 font-medium">Articles</div>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <Headphones className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">450+</div>
            <div className="text-gray-700 font-medium">Podcast Episodes</div>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">4,000+</div>
            <div className="text-gray-700 font-medium">Verified BPO Providers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHighlights;