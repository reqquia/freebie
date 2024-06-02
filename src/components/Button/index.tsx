import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 font-semibold text-white bg-primary rounded hover:bg-primary-dark"
    >
      {children}
    </button>
  );
};

export default Button;
