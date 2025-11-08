import { z } from 'zod';

// Schema for POST login with invalid credentials response
export const postLoginWithInvalidCredSchema = z.object({
  responseCode: z.number().int().positive(),
  message: z.string().min(1)
});

