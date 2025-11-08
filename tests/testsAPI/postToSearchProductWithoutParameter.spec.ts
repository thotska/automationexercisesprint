import { test, expect, request, APIRequestContext } from '@playwright/test';


test.describe('Post to Search Product API without Parameter', () => {
    let apiContext: APIRequestContext;

    

    test('should return an error when no search parameter is provided', async ({request}) => {
        const response = await request.post('api/searchProduct');
        expect(response.status()).toBe(400);
    });
});