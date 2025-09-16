import React from 'react';
import { Shield, Eye, CheckCircle } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: CheckCircle,
      title: 'Independent',
      description: 'Unbiased recommendations based on your specific needs'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Vetted partners with proven security and compliance standards'
    },
    {
      icon: Eye,
      title: 'Transparent',
      description: 'Clear pricing and processes with no hidden fees or surprises'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;