import z from 'zod';

export const getAllProductsListSchema = z.object({
  products: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string().min(2).max(100),
      price: z.number().min(0),
      brand: z.string().min(2).max(50),
      category: z.object({
        userType: z.object({
          userType: z.enum(['men', 'women', 'kids', 'unisex']),
        }),
        category: z.string().min(2).max(50),
      }),
    })
  ),
});