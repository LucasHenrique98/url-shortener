const html = `
  <html>
    <head>
      <title>301 Moved Permanently</title>
    </head>
    <body>
      <center>
        <h1>301 Moved Permanently</h1>
      </center>
    </body>
  </html>
`;

const repository = require('./repository');

const redirect = (event) => {
  const params = event.pathParameters;

  return repository.byId(params.id)
    .then((resp) => {

      console.log(resp);
      if (!resp?.link) {
        throw new Error('Not found');
      }

      return resp;
    })
    .then((resp) => {
      const headers = {
        Location: resp.link,
      };

      return {
        statusCode: 301,
        headers,
        body: html,
      }
    })
    .catch((err) => {
      return {
        statusCode: 404,
        body: JSON.stringify(err),
      }
    })
}

module.exports = {redirect};