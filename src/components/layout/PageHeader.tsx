import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <span className={index === breadcrumb.length - 1 ? 'text-blue-600 font-medium' : ''}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;