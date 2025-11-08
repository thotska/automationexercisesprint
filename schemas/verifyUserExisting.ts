import { literal, z } from 'zod';

export const verifyUserExistingSchema = z.object({
    responseCode: z.literal(200),
    message: z.string().refine(msg => msg === "User exists!", {
        message: "Expected message to be 'User exists!'"
    })
});

