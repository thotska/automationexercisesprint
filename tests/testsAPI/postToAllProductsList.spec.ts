import { test, expect, request, APIRequestContext } from '@playwright/test';
import z, { array } from 'zod';

test.describe('Post to All Products List', () => {
    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await request.newContext();
    }); 
    test('should return 405 Method Not Allowed for POST request', async () => {
        const response = await apiContext.post('/api/productsList', {
            data: { name: 'Test Product', price: '100' }
        });

        expect(response.status()).toBe(405);
        
        const responseBody = await response.json();
        expect(responseBody.responseCode).toBe(405);
        expect(responseBody.message).toContain('This request method is not supported');
    });
});