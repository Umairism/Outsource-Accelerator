import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  className = '',
  rows = 4,
  required = false
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-vertical ${className}`}
    />
  );
};

export default Textarea;