export interface TCar {
  name: string;
  images: string[];
  description: string;
  color: string;
  type: string;
  status: 'available' | 'unavailable';
  features: string[];
  pricePerHour: number;
}
