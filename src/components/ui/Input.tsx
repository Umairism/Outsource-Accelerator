import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  required = false,
  disabled = false
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors ${className}`}
    />
  );
};

export default Input;