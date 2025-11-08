import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';
import {getAllBrandsListSchema} from '../../schemas/getAllBrandsList';

test.describe('Get All Brands API', () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext();
  });

  test('should return a list of brands', async () => {
    const response = await apiContext.get('/api/brandsList');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    const parsedResponse = getAllBrandsListSchema.parse(responseBody);
  });
});