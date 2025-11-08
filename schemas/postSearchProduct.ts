import z from 'zod';

export const postSearchProductSchema = z.object({
  responseCode: z.number().int().min(100).max(599),
  products: z.array(
    z.object({
      id: z.number().int().positive(),
      name: z.string().min(1).max(100),
      price: z.string().regex(/^Rs\.\s\d+(\.\d{1,2})?$/, "Price must be in format 'Rs. XXX' or 'Rs. XXX.XX'"),
      brand: z.string().min(1).max(50),
      category: z.object({
        usertype: z.object({
          usertype: z.enum(['Women', 'Men', 'Kids']),
        }),
        category: z.string().min(1).max(50),
      }),
    })
  ),
});
