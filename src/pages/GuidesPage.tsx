import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { BookOpen, Clock, ArrowRight, Users, DollarSign, Shield, Globe, Zap, CheckCircle } from 'lucide-react';

const GuidesPage = () => {
  const guides = [
    {
      title: 'Complete Guide to Outsourcing',
      description: 'Everything you need to know about outsourcing, from basics to advanced strategies.',
      readTime: '15 min read',
      category: 'Getting Started',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'How to Choose the Right BPO Partner',
      description: 'A step-by-step guide to evaluating and selecting the perfect outsourcing partner.',
      readTime: '12 min read',
      category: 'Partner Selection',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Cost Optimization Strategies',
      description: 'Proven methods to maximize savings while maintaining quality in your outsourcing operations.',
      readTime: '10 min read',
      category: 'Cost Management',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Managing Remote Teams',
      description: 'Best practices for leading and coordinating with offshore teams effectively.',
      readTime: '8 min read',
      category: 'Team Management',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Data Security in Outsourcing',
      description: 'Essential security measures and compliance requirements for safe outsourcing.',
      readTime: '11 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Scaling Your Outsourcing Operations',
      description: 'How to grow your outsourcing initiatives as your business expands.',
      readTime: '9 min read',
      category: 'Growth',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Save up to 70% on operational costs while maintaining quality standards.'
    },
    {
      icon: Users,
      title: 'Access to Talent',
      description: 'Tap into a global pool of skilled professionals across various industries.'
    },
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Focus on core business activities while experts handle specialized tasks.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your operations across time zones for 24/7 business coverage.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce operational risks through diversified service delivery models.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Benefit from established quality management systems and processes.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate your business needs and identify outsourcing opportunities.'
    },
    {
      step: '02',
      title: 'Partner Selection',
      description: 'Choose from our network of 4,000+ verified BPO providers.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamlessly transition operations with expert guidance and support.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve processes and scale your operations.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Outsourcing Guides & Resources"
        subtitle="Comprehensive guides to help you navigate your outsourcing journey successfully."
        breadcrumb={['Home', 'The Source', 'Guides']}
      />

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Outsource?</h2>
            <p className="text-xl text-gray-600">Discover the key benefits of strategic outsourcing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6" hover>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we help you succeed with outsourcing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Guides</h2>
            <p className="text-xl text-gray-600">In-depth resources to master outsourcing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="overflow-hidden" hover>
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {guide.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Button variant="outline" size="sm" icon={ArrowRight}>
                    Read Guide
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Outsourcing Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Get personalized recommendations from our experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-blue-600 border-white hover:bg-gray-100">
              Get 3 Free Quotes
            </Button>
            <Button variant="secondary" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;