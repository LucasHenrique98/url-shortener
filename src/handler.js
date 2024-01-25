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

const redirect = (event) => {
  const headers = {
    Location: 'https://www.google.com',
  };

  return {
    statusCode: 301,
    headers,
    body: html,
  };
}

module.exports = {redirect};