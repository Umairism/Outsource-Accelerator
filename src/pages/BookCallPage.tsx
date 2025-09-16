import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { Calendar, Clock, Phone, CheckCircle, User, Video } from 'lucide-react';

const BookCallPage = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    callType: 'consultation',
    topic: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Call booking submitted:', { ...formData, selectedTime });
    setIsSubmitted(true);
  };

  const timeSlots = [
    '9:00 AM PST',
    '10:00 AM PST',
    '11:00 AM PST',
    '1:00 PM PST',
    '2:00 PM PST',
    '3:00 PM PST',
    '4:00 PM PST',
    '5:00 PM PST'
  ];

  const callTypes = [
    { value: 'consultation', label: 'Free Consultation', icon: User },
    { value: 'demo', label: 'Platform Demo', icon: Video },
    { value: 'strategy', label: 'Strategy Session', icon: Phone }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Speak with experienced outsourcing consultants'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for you'
    },
    {
      icon: Phone,
      title: 'Personalized Advice',
      description: 'Get tailored recommendations for your business'
    }
  ];

  if (isSubmitted) {
    return (
      <div>
        <PageHeader 
          title="Call Scheduled!"
          subtitle="Your consultation has been booked successfully."
        />
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Call Scheduled!</h2>
              <p className="text-xl text-gray-600 mb-8">
                We've scheduled your call and sent a confirmation to <strong>{formData.email}</strong>
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Details</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">Tomorrow</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium capitalize">{formData.callType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> You'll receive a calendar invite and call details via email shortly.
                </p>
              </div>
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
        title="Book a Call"
        subtitle="Schedule a free consultation with our outsourcing experts."
        breadcrumb={['Home', 'Book a Call']}
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Call</h2>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Call Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {callTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleInputChange('callType', type.value)}
                          className={`p-4 rounded-lg border-2 transition-colors text-center ${
                            formData.callType === type.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <IconComponent className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                          <div className="text-sm font-medium">{type.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like to discuss? *
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => handleInputChange('topic', e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="getting-started">Getting Started with Outsourcing</option>
                    <option value="cost-analysis">Cost Analysis & Savings</option>
                    <option value="provider-selection">BPO Provider Selection</option>
                    <option value="specific-service">Specific Service Requirements</option>
                    <option value="scaling">Scaling Existing Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    placeholder="Tell us more about your business and outsourcing goals..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={!selectedTime}>
                  {selectedTime ? 'Book Call' : 'Select a Time Slot'}
                </Button>
              </form>
            </Card>

            {/* Time Slots */}
            <div>
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Available Time Slots</h3>
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Tomorrow - {new Date(Date.now() + 86400000).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>30 minute sessions</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 transition-colors text-center ${
                        selectedTime === time
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">What to Expect:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Personalized outsourcing strategy discussion</li>
                    <li>• Cost savings analysis for your business</li>
                    <li>• BPO provider recommendations</li>
                    <li>• Q&A session with our experts</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCallPage;