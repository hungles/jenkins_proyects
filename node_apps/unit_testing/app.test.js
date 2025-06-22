// app.test.js
const request = require('supertest');
const app = require('./app');

describe('Test API', () => {
    it('GET /ping debe devolver pong', async () => {
        const res = await request(app).get('/ping');
        expect(res.body.message).toBe('pong');
    });

    it('POST /sumar debe devolver suma correcta', async () => {
        const res = await request(app)
            .post('/sumar')
            .send({ a: 5, b: 7 });
        expect(res.body.resultado).toBe(12);
    });
});
