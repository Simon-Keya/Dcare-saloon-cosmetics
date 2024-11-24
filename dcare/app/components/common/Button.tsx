import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
