import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;