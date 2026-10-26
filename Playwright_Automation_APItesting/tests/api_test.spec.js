import { test, expect } from '@playwright/test'

test('api GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());
})

test('api POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Vatsalya",
            "job": "Tester"
        }
    })
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Vatsalya');
    console.log(await response.json());
})

test('api Put request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Vatsalya Ramraje",
            "job": "Quality Anaysis"
        }
    })
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Vatsalya Ramraje');
    console.log(await response.json());
})

test('api DELETE request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
})