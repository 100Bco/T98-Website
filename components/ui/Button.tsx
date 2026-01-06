import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold px-8 py-3 transition-all duration-300 transform active:scale-95 rounded-btn";
  
  const variants = {
    primary: "bg-btn-gradient text-white shadow-glow-orange hover:-translate-y-[2px] hover:brightness-110",
    secondary: "bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-mist hover:border-brand-blue",
    white: "bg-white text-brand-navy hover:bg-gray-50 shadow-md", // Used for Auto Injury page
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};