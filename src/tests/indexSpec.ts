import supertest from 'supertest';
import { Request } from 'supertest';
import app from '../index';
import size from '../helpers/sharpFunction';

/*
  ✅ Api EndPoint
*/
const Request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the image endpoint', async () => {
    const response = await Request.get('/image');
    expect(response.status).toBe(200);
  });
});

/*
  ✅ Image processer
*/
describe('Test Image Processing', () => {
  it('get the image processing', () => {
    expect(size('fjord.jpg', '250-250-fjord.jpg', 250, 250)).toBeTruthy;
  });
});
