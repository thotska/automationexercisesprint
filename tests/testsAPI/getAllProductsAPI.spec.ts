import { test, expect, request } from '@playwright/test';
import z, { array } from 'zod';
import {getAllProductsListSchema} from '../../schemas/getAllProductsList';

test.describe('Get All Products API', () => {

  test('should return a list of products', async ({ request }) => {
    const response = await request.get('/api/productsList');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    const parsedResponse = getAllProductsListSchema.safeParse(responseBody);
  });
});