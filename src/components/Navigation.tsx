import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition-colors">
              OutsourceAccel
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* The Source Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSourceOpen(!isSourceOpen)}
                  className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${
                    ['/about', '/guides', '/blog', '/podcast', '/glossary'].some(path => isActive(path))
                      ? 'text-blue-700'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  The Source
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isSourceOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
                      <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News Hub</Link>
                      <Link to="/podcast" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Podcast</Link>
                      <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Articles</Link>
                      <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Guides</Link>
                      <Link to="/podcast" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Videos</Link>
                      <Link to="/glossary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Glossary</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link 
                to="/directory" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/directory') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                BPO Directory
              </Link>
              <Link 
                to="/calculator" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/calculator') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                Outsourcing Calculator
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <div className="space-y-1">
                <div className="text-gray-900 block px-3 py-2 text-base font-medium">The Source</div>
                <Link to="/about" className="text-gray-600 block px-6 py-2 text-sm">About</Link>
                <Link to="/blog" className="text-gray-600 block px-6 py-2 text-sm">News Hub</Link>
                <Link to="/podcast" className="text-gray-600 block px-6 py-2 text-sm">Podcast</Link>
                <Link to="/blog" className="text-gray-600 block px-6 py-2 text-sm">Articles</Link>
                <Link to="/guides" className="text-gray-600 block px-6 py-2 text-sm">Guides</Link>
                <Link to="/podcast" className="text-gray-600 block px-6 py-2 text-sm">Videos</Link>
                <Link to="/glossary" className="text-gray-600 block px-6 py-2 text-sm">Glossary</Link>
              </div>
              <Link to="/directory" className="text-gray-700 block px-3 py-2 text-base font-medium">BPO Directory</Link>
              <Link to="/calculator" className="text-gray-700 block px-3 py-2 text-base font-medium">Outsourcing Calculator</Link>
              <Link to="/contact" className="text-gray-700 block px-3 py-2 text-base font-medium">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;