import { Types } from 'mongoose';

// Interface for booking type
export interface TBooking {
  user: Types.ObjectId;
  car: Types.ObjectId;
  startDate: Date;
  endDate?: Date;
  totalCost: number;
  status: 'pending' | 'approved' | 'cancelled' | 'completed';
  isPaid: boolean;
}
