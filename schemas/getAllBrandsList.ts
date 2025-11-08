import z from 'zod';

export const getAllBrandsListSchema = z.object({    
    brands: z.array(
        z.object({
            id: z.number().min(1),
            brand: z.string().min(2).max(100)
        })
    )
});