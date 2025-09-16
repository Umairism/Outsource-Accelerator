import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { Search, BookOpen } from 'lucide-react';

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');

  const alphabet = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const glossaryTerms = [
    {
      term: 'BPO',
      definition: 'Business Process Outsourcing - The practice of contracting specific business operations and responsibilities to a third-party service provider.',
      category: 'General'
    },
    {
      term: 'Captive Center',
      definition: 'A subsidiary company established by a parent organization in another country to provide services exclusively to the parent company.',
      category: 'Business Models'
    },
    {
      term: 'Data Security',
      definition: 'The practice of protecting digital information from unauthorized access, corruption, or theft throughout its entire lifecycle.',
      category: 'Security'
    },
    {
      term: 'FTE',
      definition: 'Full-Time Equivalent - A unit that indicates the workload of an employed person in a way that makes workloads comparable across various contexts.',
      category: 'HR Terms'
    },
    {
      term: 'Governance',
      definition: 'The framework of rules, relationships, systems, and processes within and by which authority is exercised and controlled in outsourcing relationships.',
      category: 'Management'
    },
    {
      term: 'Hybrid Model',
      definition: 'A combination of onshore, nearshore, and offshore outsourcing strategies to optimize cost, quality, and risk management.',
      category: 'Business Models'
    },
    {
      term: 'ITO',
      definition: 'Information Technology Outsourcing - The use of external service providers to effectively deliver IT-enabled business process, application service and infrastructure solutions.',
      category: 'Technology'
    },
    {
      term: 'KPO',
      definition: 'Knowledge Process Outsourcing - The outsourcing of core information-related business activities which are competitively important or form an integral part of the value chain.',
      category: 'General'
    },
    {
      term: 'Lift and Shift',
      definition: 'A migration strategy where existing processes are moved to an outsourcing provider with minimal changes to the original process design.',
      category: 'Migration'
    },
    {
      term: 'Nearshoring',
      definition: 'The practice of transferring business or IT processes to companies in a nearby country, often sharing a border with the target country.',
      category: 'Location Strategy'
    },
    {
      term: 'Offshoring',
      definition: 'The relocation of business processes from one country to another, typically to take advantage of lower costs or other economic benefits.',
      category: 'Location Strategy'
    },
    {
      term: 'Process Optimization',
      definition: 'The discipline of adjusting a process to optimize some specified set of parameters without violating constraints.',
      category: 'Process Improvement'
    },
    {
      term: 'Quality Assurance',
      definition: 'A systematic process of checking to see whether a product or service being developed meets specified requirements.',
      category: 'Quality Management'
    },
    {
      term: 'RPA',
      definition: 'Robotic Process Automation - Technology that allows businesses to configure computer software to capture and interpret applications for processing transactions, manipulating data, and communicating with other digital systems.',
      category: 'Technology'
    },
    {
      term: 'SLA',
      definition: 'Service Level Agreement - A contract between a service provider and a customer that specifies the level of service expected from the service provider.',
      category: 'Contracts'
    },
    {
      term: 'Transition',
      definition: 'The process of transferring responsibility for business processes from the client organization to the outsourcing service provider.',
      category: 'Migration'
    },
    {
      term: 'Virtual Assistant',
      definition: 'A remote administrative professional who provides various services to entrepreneurs and small businesses from a remote location.',
      category: 'Roles'
    },
    {
      term: 'White Label',
      definition: 'A product or service produced by one company that other companies rebrand to make it appear as if they made it.',
      category: 'Business Models'
    }
  ];

  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'All' || item.term.charAt(0).toUpperCase() === selectedLetter;
    
    return matchesSearch && matchesLetter;
  });

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});

  return (
    <div>
      <PageHeader 
        title="Outsourcing Glossary"
        subtitle="Comprehensive definitions of outsourcing terms, acronyms, and industry jargon."
        breadcrumb={['Home', 'The Source', 'Glossary']}
      />

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="text-gray-600">
              {filteredTerms.length} terms found
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {alphabet.map(letter => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  selectedLetter === letter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(groupedTerms).sort().map(letter => (
            <div key={letter} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                {letter}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {groupedTerms[letter].map((item, index) => (
                  <Card key={index} className="p-6" hover>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{item.term}</h3>
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-gray-600">{item.definition}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No terms found</h3>
              <p className="text-gray-600">
                Try adjusting your search or browse by letter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Suggest Term CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Missing a Term?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Help us improve our glossary by suggesting new terms or definitions
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            Suggest a Term
          </button>
        </div>
      </section>
    </div>
  );
};

export default GlossaryPage;