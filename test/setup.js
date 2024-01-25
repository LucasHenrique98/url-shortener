require('dotenv').config();
const {mockClient} = require('aws-sdk-client-mock');
const {DynamoDBDocumentClient} = require('@aws-sdk/lib-dynamodb');
const ddbMock = mockClient(DynamoDBDocumentClient);

ddbMock.on(GetCommand)
  .resolves({ Item: undefined })
  .on(GetCommand, {
    TableName: 'Shortener',
    Key: { id: 'iNxun1bg5Y' }
  })
  .resolves({ Item: { link: 'https://www.google.com' }})