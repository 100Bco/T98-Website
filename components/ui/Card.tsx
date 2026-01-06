import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white rounded-card border border-gray-100 p-6 sm:p-8
        transition-all duration-300
        ${hoverEffect ? 'hover:shadow-card-hover hover:border-brand-blue/30 hover:-translate-y-1 group cursor-pointer' : 'shadow-card'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};