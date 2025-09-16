import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@outsourceaccel.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our outsourcing experts'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business District, Manila, Philippines',
      description: 'Our main office in the heart of the BPO capital'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      description: 'We\'re here to help during business hours'
    }
  ];

  const offices = [
    {
      city: 'Manila',
      country: 'Philippines',
      address: '123 Business District, Makati City',
      phone: '+63 2 8123 4567',
      email: 'manila@outsourceaccel.com'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      address: '456 Harbor Bridge Road, Sydney NSW',
      phone: '+61 2 9123 4567',
      email: 'sydney@outsourceaccel.com'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Financial District, London EC2',
      phone: '+44 20 7123 4567',
      email: 'london@outsourceaccel.com'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our outsourcing experts. We're here to help you find the perfect BPO solution."
        breadcrumb={['Home', 'Contact']}
      />

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quotes">Get 3 Free Quotes</option>
                    <option value="consultation">Book a Consultation</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your outsourcing needs..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" icon={Send} className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Manila, Philippines</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600">We have offices worldwide to serve you better</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {office.city}, {office.country}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">{office.address}</p>
                  <p className="text-sm font-medium">{office.phone}</p>
                  <p className="text-sm text-blue-600">{office.email}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can I get quotes?</h3>
              <p className="text-gray-600">
                We typically provide 3 qualified quotes within 24-48 hours of receiving your requirements.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a cost for your service?</h3>
              <p className="text-gray-600">
                Our advisory services are completely free. We're compensated by our BPO partners when successful matches are made.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What industries do you serve?</h3>
              <p className="text-gray-600">
                We serve all industries including IT, finance, healthcare, e-commerce, and more across various business functions.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you vet BPO providers?</h3>
              <p className="text-gray-600">
                We have a rigorous vetting process including financial checks, quality audits, and ongoing performance monitoring.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;