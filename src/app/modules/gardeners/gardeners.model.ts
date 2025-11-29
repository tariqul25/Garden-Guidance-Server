import { Schema, model } from 'mongoose';
import { IGardener } from './gardeners.interface';

const gardenerSchema = new Schema<IGardener>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

export const Gardener = model<IGardener>('Gardener', gardenerSchema);
