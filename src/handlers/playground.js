'use strict';

async function index(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is the index',
        input: event,
      },
      null,
      2
    ),
  };
}
