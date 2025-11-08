import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';

test.describe('Put To All Brands List API', () => {
 

    test('should get message "This request method is not supported."', async () => {
    let apiContext: APIRequestContext;
    apiContext = await request.newContext();

        const response = await apiContext.put('/api/brandsList');
        const responseBody = await response.json();

        expect(response.status()).toBe(405);
        expect(responseBody.message).toBe("This request method is not supported.");
    });
});