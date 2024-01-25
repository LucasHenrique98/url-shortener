const {redirect} = require('../src/handler.js');

const event = {
  "resource": "/{id}",
  "path": "/iNxun1bg5Y",
  "httpMethod": "GET",
  "pathParameters": {
    "id": "iNxun1bg5Y"
  },
  "body": null,
  "isBase64Encoded": false
};

describe('Hanlder tests', () => {
  it('should redirect to google.com', async () => {
    const result = await redirect(event);

    console.log(result);

    expect(result.statusCode).toBe(301);
    expect(result.headers).toEqual({ Location: 'https://www.google.com'});
    expect(typeof result.body).toBe('string');
  });
});