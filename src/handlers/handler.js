'use strict';

async function query(event, context, callback) {
  let response = [{name: 'Waldo', age: 34}, {name: 'Valentina', age: 31}];
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      response,
      null,
      2
    ),
  };
}

async function playground(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is the playground',
        input: event,
      },
      null,
      2
    ),
  };
}

module.exports = {
  query
}