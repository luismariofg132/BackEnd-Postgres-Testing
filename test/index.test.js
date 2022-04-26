const app = require('../index')
const request = require('supertest');

describe('GET /instituciones-educativas', () => {
    test('Retornar un status 200', async () => {
        const response = await request(app).get('/api/instituciones-educativas').send();
        // console.log(response.headers);
        expect(response.statusCode).toBe(200);
    })

    test("Retorne un array de instituciones educativas", async () => {
        const response = await request(app).get('/api/instituciones-educativas').send();
        expect(response.body).toBeInstanceOf(Array);
    })
})

describe("GET /actores", () => {
    test("Retornar el usuario", () => { })
})