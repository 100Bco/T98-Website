import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DuotoneIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export const DuotoneIcon: React.FC<DuotoneIconProps> = ({ icon: Icon, className = '', size = 32 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
        {/* Background Fill Layer */}
        <Icon 
            size={size} 
            className="text-brand-orange-light absolute top-0 left-0" 
            strokeWidth={0} 
            fill="currentColor"
        />
        {/* Foreground Stroke Layer */}
        <Icon 
            size={size} 
            className="text-brand-blue relative z-10 group-hover:animate-bounce-subtle" 
            strokeWidth={1.5}
        />
    </div>
  );
};