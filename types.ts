import { LucideIcon } from 'lucide-react';

export interface RouteParams {
  id?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface ConditionItem {
  id: string;
  title: string;
  path: string;
}

export interface Testimonial {
  quote: string;
  author?: string;
}

export enum LocationType {
  AUSTIN = 'Austin (North)',
  PFLUGERVILLE = 'Pflugerville',
}