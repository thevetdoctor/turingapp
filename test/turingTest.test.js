const request = require('supertest');
const server = require('../index');


describe('Test Endpoints', () => {
  it('Return a response from the endpoint', async () => {
    const res = await request(server)
                      .get('/tasks?num=first&name=test');
          expect(res.status).toEqual(200);
  });
}); 