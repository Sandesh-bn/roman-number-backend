const request = require('supertest');
const app = require('../server'); // path to your express app

describe('GET /romannumeral', () => {
  test('should return 200 and valid roman numeral for input 2023', async () => {
    const res = await request(app).get('/romannumeral?query=2023');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      input: '2023',
      output: 'MMXXIII'
    });
  });

  test('should return 400 for missing query param', async () => {
    const res = await request(app).get('/romannumeral');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid integer value');
  });

  test('should return 400 for non-integer input', async () => {
    const res = await request(app).get('/romannumeral?query=abc');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid integer value');
  });

  test('should return 400 for number below range', async () => {
    const res = await request(app).get('/romannumeral?query=0');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Number should be between 0 and 3999.');
  });

  test('should return 400 for number above range', async () => {
    const res = await request(app).get('/romannumeral?query=4000');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Number should be between 0 and 3999.');
  });

  test('should return correct Roman numeral for edge case 1', async () => {
    const res = await request(app).get('/romannumeral?query=1');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('I');
  });

  test('should return correct Roman numeral for edge case 3999', async () => {
    const res = await request(app).get('/romannumeral?query=3999');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('MMMCMXCIX');
  });

  test('should return correct Roman numeral for 4', async () => {
    const res = await request(app).get('/romannumeral?query=4');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('IV');
  });

  test('should return correct Roman numeral for 9', async () => {
    const res = await request(app).get('/romannumeral?query=9');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('IX');
  });

  test('should return correct Roman numeral for 40', async () => {
    const res = await request(app).get('/romannumeral?query=40');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('XL');
  });

  test('should return correct Roman numeral for 48', async () => {
    const res = await request(app).get('/romannumeral?query=48');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('XLVIII');
  });

  test('should return correct Roman numeral for 90', async () => {
    const res = await request(app).get('/romannumeral?query=90');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('XC');
  });

  test('should return correct Roman numeral for 99', async () => {
    const res = await request(app).get('/romannumeral?query=99');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('XCIX');
  });

  test('should return correct Roman numeral for 1000', async () => {
    const res = await request(app).get('/romannumeral?query=1000');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('M');
  });

  test('should return correct Roman numeral for 3000', async () => {
    const res = await request(app).get('/romannumeral?query=3000');
    expect(res.statusCode).toBe(200);
    expect(res.body.output).toBe('MMM');
  });
});
