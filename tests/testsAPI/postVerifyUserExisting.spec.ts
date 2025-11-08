import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';
import { verifyUserExistingSchema } from '../../schemas/verifyUserExisting';  

test.describe('Post Verify User Existing API', () => {
  let apiContext: APIRequestContext;

  test('should return a success response when user exists', async ({request}) => {
    const response = await request.post('api/verifyLogin', {
      form: { email: process.env.userEmail!, password: process.env.userPassword! }
    });
    const responseBody = await response.json();
    
    expect(response.status()).toBe(200);
    expect(verifyUserExistingSchema.parse(responseBody));
  });
});