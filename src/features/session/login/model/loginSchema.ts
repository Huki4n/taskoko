import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ message: 'Email cannot be empty' })
    .email('Invalid email'),

  password: z
    .string({ message: 'Password cannot be empty' })
    .min(8, 'Password must be at least 8 characters.'),
})
