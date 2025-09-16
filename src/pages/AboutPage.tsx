import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We help businesses unlock global talent and achieve sustainable growth through strategic outsourcing partnerships.'
    },
    {
      icon: Users,
      title: 'People-First',
      description: 'Our success is measured by the success of our clients and the positive impact on global employment opportunities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in vetting partners and providing comprehensive outsourcing guidance.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Connecting businesses worldwide to create opportunities and drive economic growth across borders.'
    }
  ];

  const team = [
    {
      name: 'Derek Gallimore',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Derek founded OutsourceAccel to democratize access to global talent and help businesses scale efficiently.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Sarah oversees our global operations and ensures quality standards across all partner relationships.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director of Partnerships',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Michael builds and maintains relationships with BPO providers worldwide, ensuring quality and reliability.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Content',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Lisa leads our content strategy, creating valuable resources and insights for the outsourcing community.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="About OutsourceAccel"
        subtitle="We're the world's leading outsourcing advisory and platform, helping businesses connect with trusted offshore partners since 2015."
        breadcrumb={['Home', 'About']}
      />
      
      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2015, OutsourceAccel began with a simple mission: to make outsourcing accessible, 
                  transparent, and successful for businesses of all sizes. What started as a small advisory service 
                  has grown into the world's most comprehensive outsourcing platform.
                </p>
                <p>
                  Today, we've helped thousands of companies reduce costs by up to 70% while accessing world-class 
                  talent. Our platform connects businesses with over 4,000 verified BPO providers across 50+ countries, 
                  supported by extensive resources including articles, podcasts, and expert guidance.
                </p>
                <p>
                  We believe that outsourcing, when done right, creates opportunities for everyone - businesses can 
                  scale efficiently, while talented professionals worldwide gain access to meaningful work and career growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center" hover>
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind OutsourceAccel's success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that tell our story</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Companies Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4,000+</div>
              <div className="text-blue-100">Verified Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">70%</div>
              <div className="text-blue-100">Average Cost Savings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;