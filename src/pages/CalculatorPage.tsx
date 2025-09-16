import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Calculator, DollarSign, TrendingDown, Users, Clock } from 'lucide-react';

const CalculatorPage = () => {
  const [formData, setFormData] = useState({
    employees: '',
    avgSalary: '',
    benefits: '',
    overhead: '',
    country: 'Philippines',
    serviceType: 'Customer Support'
  });

  const [results, setResults] = useState(null);

  const countries = [
    { name: 'Philippines', multiplier: 0.25 },
    { name: 'India', multiplier: 0.30 },
    { name: 'Vietnam', multiplier: 0.28 },
    { name: 'Poland', multiplier: 0.45 },
    { name: 'Ukraine', multiplier: 0.35 },
    { name: 'Mexico', multiplier: 0.40 }
  ];

  const serviceTypes = [
    'Customer Support',
    'Software Development',
    'Data Entry',
    'Accounting',
    'Digital Marketing',
    'IT Support',
    'Virtual Assistant'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateSavings = () => {
    const employees = parseInt(formData.employees) || 0;
    const avgSalary = parseFloat(formData.avgSalary) || 0;
    const benefits = parseFloat(formData.benefits) || 0;
    const overhead = parseFloat(formData.overhead) || 0;

    const currentAnnualCost = employees * (avgSalary + benefits + overhead) * 12;
    
    const selectedCountry = countries.find(c => c.name === formData.country);
    const outsourcedAnnualCost = currentAnnualCost * selectedCountry.multiplier;
    
    const annualSavings = currentAnnualCost - outsourcedAnnualCost;
    const savingsPercentage = ((annualSavings / currentAnnualCost) * 100).toFixed(1);

    setResults({
      currentAnnualCost,
      outsourcedAnnualCost,
      annualSavings,
      savingsPercentage,
      monthlySavings: annualSavings / 12
    });
  };

  return (
    <div>
      <PageHeader 
        title="Outsourcing Cost Calculator"
        subtitle="Calculate your potential savings with our interactive cost calculator."
        breadcrumb={['Home', 'Outsourcing Calculator']}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Cost Calculator</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 10"
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Monthly Salary (USD)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 5000"
                    value={formData.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Benefits per Employee (USD)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 1500"
                    value={formData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Overhead per Employee (USD)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 1000"
                    value={formData.overhead}
                    onChange={(e) => handleInputChange('overhead', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Outsourcing Destination
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    {countries.map(country => (
                      <option key={country.name} value={country.name}>{country.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    {serviceTypes.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <Button onClick={calculateSavings} className="w-full" size="lg">
                  Calculate Savings
                </Button>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card className="p-8 bg-gradient-to-br from-blue-50 to-white">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-green-100 p-4 rounded-full">
                          <TrendingDown className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {results.savingsPercentage}% Savings
                      </h3>
                      <p className="text-gray-600">Potential cost reduction</p>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Breakdown</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Current Annual Cost</span>
                        <span className="font-semibold text-gray-900">
                          ${results.currentAnnualCost.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Outsourced Annual Cost</span>
                        <span className="font-semibold text-gray-900">
                          ${results.outsourcedAnnualCost.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Annual Savings</span>
                        <span className="font-semibold text-green-600">
                          ${results.annualSavings.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Monthly Savings</span>
                        <span className="font-semibold text-green-600">
                          ${results.monthlySavings.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-blue-600 text-white">
                    <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="mb-4">
                      Get personalized quotes from verified BPO providers in {formData.country}.
                    </p>
                    <Button variant="outline" className="bg-white text-blue-600 border-white hover:bg-gray-100">
                      Get 3 Free Quotes
                    </Button>
                  </Card>
                </>
              ) : (
                <Card className="p-8 text-center">
                  <DollarSign className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Calculate Your Savings</h3>
                  <p className="text-gray-600">
                    Fill out the form to see your potential cost savings with outsourcing.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why These Numbers Matter</h2>
            <p className="text-xl text-gray-600">Understanding the true cost of outsourcing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Labor Costs</h3>
              <p className="text-gray-600">
                Significant savings on salaries while accessing skilled talent in cost-effective markets.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h3>
              <p className="text-gray-600">
                Reduce overhead costs including office space, equipment, and administrative expenses.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingDown className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalability</h3>
              <p className="text-gray-600">
                Scale your operations up or down quickly without the fixed costs of permanent staff.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;