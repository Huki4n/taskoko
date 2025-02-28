import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string().min(1, 'Name cannot be empty'),
  email: z
    .string({ message: 'Email cannot be empty' })
    .email('Invalid email'),
  password: z
    .string({ message: 'Password cannot be empty' })
    .min(8, 'Password must be at least 8 characters.'),
})
