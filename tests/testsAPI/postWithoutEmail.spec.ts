import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';
import { PostWithoutEmailResponseSchema } from '../../schemas/postWithoutEmaild';


test.describe('Post Without Email API', () => {
  let apiContext: APIRequestContext;


  test('should return a success response when user exists', async ({request}) => {
    const response = await request.post('api/verifyLogin', {
      form: {password: process.env.userPassword! }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(400);
    expect(PostWithoutEmailResponseSchema.parse(responseBody));
  });
});