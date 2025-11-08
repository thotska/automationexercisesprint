import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';
import {getAllProductsListSchema} from '../../schemas/getAllProductsList';

test.describe('Get All Products API', () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext();
  });

  test('should return a list of products', async () => {
    const response = await apiContext.get('/api/productsList');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    const parsedResponse = getAllProductsListSchema.safeParse(responseBody);
  });
});