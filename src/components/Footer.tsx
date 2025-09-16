import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest outsourcing insights and opportunities delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="/podcast" className="text-gray-400 hover:text-white transition-colors">Podcast</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/podcast" className="text-gray-400 hover:text-white transition-colors">Videos</Link></li>
            </ul>
          </div>

          {/* Sectors & Roles */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Sectors</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/directory?sector=it" className="text-gray-400 hover:text-white transition-colors">IT & Software</Link></li>
              <li><Link to="/directory?sector=customer-service" className="text-gray-400 hover:text-white transition-colors">Customer Service</Link></li>
              <li><Link to="/directory?sector=finance" className="text-gray-400 hover:text-white transition-colors">Finance & Accounting</Link></li>
              <li><Link to="/directory?sector=marketing" className="text-gray-400 hover:text-white transition-colors">Marketing</Link></li>
            </ul>
            <h4 className="text-lg font-semibold mb-4">Top Roles</h4>
            <ul className="space-y-2">
              <li><Link to="/directory?role=va" className="text-gray-400 hover:text-white transition-colors">Virtual Assistant</Link></li>
              <li><Link to="/directory?role=developer" className="text-gray-400 hover:text-white transition-colors">Software Developer</Link></li>
              <li><Link to="/directory?role=bookkeeper" className="text-gray-400 hover:text-white transition-colors">Bookkeeper</Link></li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
            <p className="text-gray-400 mb-4">Connect with verified BPO providers today</p>
            <Link 
              to="/get-quotes" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center"
            >
              Get 3 Free Quotes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; 2025 OutsourceAccel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;