import {test, expect} from '@playwright/test';
import {deleteToVerifyLoginSchema} from '../../schemas/deleteToVerifyLogin';

test.describe('Delete To Verify Login API', () => {

  test('should return a success response when user exists', async ({request}) => {
    const response = await request.delete('/api/verifyLogin');
    const responseBody = await response.json();

    expect(response.status()).toBe(405);
    expect(deleteToVerifyLoginSchema.parse(responseBody));
  });
});