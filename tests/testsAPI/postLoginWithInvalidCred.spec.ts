import {test, expect} from '@playwright/test';
import {postLoginWithInvalidCredSchema} from '../../schemas/postLoginWithInvalidCred';

test.describe('Post Login with Invalid Credentials API', () => {

  test('should return an error response for invalid credentials', async ({request}) => {
    const response = await request.post('/api/verifyLogin', {
      form: { email: 'invalid@email.com', password: 'invalidpassword' }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(404);
    expect(postLoginWithInvalidCredSchema.parse(responseBody));
  });
});