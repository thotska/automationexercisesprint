import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';
import { postSearchProductSchema } from '../../schemas/postSearchProduct';

test.describe('Post Search Product API', () => {
  let apiContext: APIRequestContext;
    test.beforeAll(async () => {
      apiContext = await request.newContext({
        baseURL: 'https://automationexercise.com'
      });
    });
    test('should return products matching the search criteria', async () => {
      
      const requestBody = {
        search_product: "Shirt"
      };

      const response = await apiContext.post('/api/searchProduct', {
        form: requestBody
      });
        expect(response.status()).toBe(200);
      const responseBody = await response.json()
      const parsedResponse = postSearchProductSchema.parse(responseBody);
    });
});