import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { CheckCircle, Users, DollarSign, Clock } from 'lucide-react';

const GetQuotesPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Step 2: Requirements
    serviceType: '',
    teamSize: '',
    budget: '',
    timeline: '',
    
    // Step 3: Details
    description: '',
    experience: '',
    location: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    setCurrentStep(4); // Show success message
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Verified Providers',
      description: 'All quotes come from pre-vetted, reliable BPO partners'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Compare rates and find the best value for your budget'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Receive your quotes within 24-48 hours'
    },
    {
      icon: Users,
      title: 'Expert Matching',
      description: 'Our team ensures providers match your specific needs'
    }
  ];

  const serviceTypes = [
    'Customer Support',
    'Software Development',
    'Data Entry & Processing',
    'Accounting & Finance',
    'Digital Marketing',
    'Virtual Assistant',
    'IT Support',
    'Content Creation',
    'Lead Generation',
    'Other'
  ];

  const teamSizes = [
    '1-5 people',
    '6-10 people',
    '11-25 people',
    '26-50 people',
    '51-100 people',
    '100+ people'
  ];

  const budgetRanges = [
    'Under $5,000/month',
    '$5,000 - $15,000/month',
    '$15,000 - $30,000/month',
    '$30,000 - $50,000/month',
    '$50,000+ /month'
  ];

  const timelines = [
    'ASAP (within 2 weeks)',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  if (currentStep === 4) {
    return (
      <div>
        <PageHeader 
          title="Thank You!"
          subtitle="Your quote request has been submitted successfully."
        />
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
              <p className="text-xl text-gray-600 mb-8">
                We've received your quote request and our team is already working on finding the best BPO providers for your needs.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-gray-700">Our experts review your requirements (within 2 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-gray-700">We match you with 3 qualified BPO providers (within 24 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-gray-700">You receive detailed quotes and provider profiles (within 48 hours)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We'll send your quotes to <strong>{formData.email}</strong>
              </p>
              <Button onClick={() => window.location.href = '/'}>
                Return to Homepage
              </Button>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title="Get 3 Free Quotes"
        subtitle="Tell us about your outsourcing needs and we'll connect you with the best BPO providers."
        breadcrumb={['Home', 'Get 3 Free Quotes']}
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Step {currentStep} of 3</span>
                <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 3) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
                  <div className="space-y-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Requirements */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Requirements</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Team Size *
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        >
                          <option value="">Select team size</option>
                          {teamSizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range *
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline *
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="">When do you need to start?</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        placeholder="Please describe your project requirements, specific skills needed, and any other important details..."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={6}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Outsourcing Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="">Select your experience level</option>
                        <option value="none">No previous experience</option>
                        <option value="some">Some experience</option>
                        <option value="extensive">Extensive experience</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Location (Optional)
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      >
                        <option value="">No preference</option>
                        <option value="philippines">Philippines</option>
                        <option value="india">India</option>
                        <option value="vietnam">Vietnam</option>
                        <option value="poland">Poland</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="mexico">Mexico</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <div>
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                </div>
                <div>
                  {currentStep < 3 ? (
                    <Button onClick={nextStep}>
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit">
                      Get My Quotes
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetQuotesPage;