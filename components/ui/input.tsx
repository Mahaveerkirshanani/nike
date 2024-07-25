import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="relative mb-4">
      {label && (
        <label className="block text-gray-700 font-medium mb-2" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FB7185] ${
          error ? 'border-red-500 focus:ring-red-500' : ''
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
