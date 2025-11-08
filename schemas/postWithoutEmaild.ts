import { z } from 'zod';

export const PostWithoutEmailResponseSchema = z.object({
  responseCode: z.number().int(),
  message: z.string()
});


