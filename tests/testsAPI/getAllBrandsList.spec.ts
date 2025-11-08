import { test, expect, request } from '@playwright/test';
import z, { array } from 'zod';
import {getAllBrandsListSchema} from '../../schemas/getAllBrandsList';

test.describe('Get All Brands API', () => {

  test('should return a list of brands using POST method', async ({ request }) => {
    const response = await request.post('/api/brandsList');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    const parsedResponse = getAllBrandsListSchema.parse(responseBody);
  });
});