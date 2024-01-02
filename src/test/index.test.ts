import supertest from "supertest";
import {server} from '../index'

describe('Test', () => {
    const request = supertest.agent(server);

    afterAll(() => {
        server.close();
    });

    test('Should return 200', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});