import { z } from 'zod';

export const TipSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  userEmail: z.string().email(),
  availability: z.enum(['Public', 'Private']).default('Public'),
  trending: z.enum(['top', 'normal']).optional(),
});
