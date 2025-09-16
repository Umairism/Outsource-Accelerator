import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Search, Filter, MapPin, Users, Star, ArrowRight, Globe } from 'lucide-react';

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const companies = [
    {
      name: 'TechVantage Solutions',
      location: 'Manila, Philippines',
      employees: '500-1000',
      rating: 4.8,
      services: ['Software Development', 'IT Support', 'Web Development'],
      description: 'Leading provider of software development and IT services with over 10 years of experience.',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Global Customer Care',
      location: 'Cebu, Philippines',
      employees: '1000-5000',
      rating: 4.9,
      services: ['Customer Support', 'Technical Support', 'Chat Support'],
      description: 'Award-winning customer service provider with 24/7 multilingual support capabilities.',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'DataPro Analytics',
      location: 'Bangalore, India',
      employees: '200-500',
      rating: 4.7,
      services: ['Data Entry', 'Data Analysis', 'Business Intelligence'],
      description: 'Specialized data processing and analytics company serving Fortune 500 clients.',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'FinanceFirst BPO',
      location: 'Mumbai, India',
      employees: '300-500',
      rating: 4.6,
      services: ['Accounting', 'Bookkeeping', 'Financial Analysis'],
      description: 'Trusted financial services provider with certified accountants and advanced security.',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Creative Digital Agency',
      location: 'Ho Chi Minh City, Vietnam',
      employees: '100-200',
      rating: 4.8,
      services: ['Digital Marketing', 'Graphic Design', 'Content Creation'],
      description: 'Full-service digital agency specializing in creative solutions and marketing campaigns.',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'SecureOps Solutions',
      location: 'Krakow, Poland',
      employees: '150-300',
      rating: 4.9,
      services: ['Cybersecurity', 'IT Infrastructure', 'Cloud Services'],
      description: 'European cybersecurity specialists with ISO 27001 certification and GDPR compliance.',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const countries = ['All Countries', 'Philippines', 'India', 'Vietnam', 'Poland', 'Ukraine', 'Mexico'];
  const services = ['All Services', 'Software Development', 'Customer Support', 'Data Entry', 'Accounting', 'Digital Marketing', 'IT Support'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = !selectedCountry || selectedCountry === 'All Countries' || 
                          company.location.includes(selectedCountry);
    const matchesService = !selectedService || selectedService === 'All Services' ||
                          company.services.includes(selectedService);
    
    return matchesSearch && matchesCountry && matchesService;
  });

  return (
    <div>
      <PageHeader 
        title="BPO Directory"
        subtitle="Discover and connect with over 4,000 verified BPO providers worldwide."
        breadcrumb={['Home', 'BPO Directory']}
      />

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search companies or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            <Button icon={Filter}>
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCompanies.length} BPO Providers Found
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Rating (High to Low)</option>
                <option>Company Size</option>
                <option>Location</option>
                <option>Recently Added</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCompanies.map((company, index) => (
              <Card key={index} className="p-6" hover>
                <div className="flex items-start space-x-4">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">{company.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{company.location}</span>
                      <Users className="h-4 w-4 ml-4 mr-1" />
                      <span className="text-sm">{company.employees} employees</span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{company.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button size="sm" icon={ArrowRight}>
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8">Let our experts help you find the perfect BPO partner</p>
          <Button variant="outline" size="lg" className="bg-white text-blue-600 border-white hover:bg-gray-100">
            Get Personalized Recommendations
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;