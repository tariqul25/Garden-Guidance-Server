import { z } from 'zod';

export const GardenerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  contactNo: z.string().min(8),
  address: z.string().min(1),
  status: z.enum(['active', 'inactive']).optional(),
});
