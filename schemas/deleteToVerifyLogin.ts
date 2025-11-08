import z from 'zod';

export const deleteToVerifyLoginSchema = z.object({
  responseCode: z.number().int(),
  message: z.string(),
});
