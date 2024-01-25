const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const debug = require('debug')('url-shorter:repository');
const {documentClient} = require('./config/dynamodb');

const repository = {
  DEFAULT_SIZE: '50',
  TABLE_NAME: 'Shortener',
  byId(id) {
    debug({id});

    const params = new GetCommand({
      Key: {id},
      TableName: this.TABLE_NAME,
    });

    return documentClient.send(params)
      .then((result) => {
        return result.Item;
      })
  }
};

module.exports = repository;