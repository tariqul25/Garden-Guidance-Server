import { Schema, model } from 'mongoose';
import { ITip } from './tips.interface';

const tipSchema = new Schema<ITip>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    userEmail: { type: String, required: true },
    availability: { type: String, enum: ['Public', 'Private'], default: 'Public' },
    trending: { type: String, enum: ['top'], default: undefined },
  },
  { timestamps: true }
);

export const Tip = model<ITip>('Tip', tipSchema);
