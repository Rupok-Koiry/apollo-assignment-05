import { Schema, model } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    color: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'unavailable'],
      default: 'available',
    },
    features: {
      type: [String],
      default: [],
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Car = model<TCar>('Car', carSchema);
export default Car;
