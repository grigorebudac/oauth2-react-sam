const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

exports.handler = async (event, context, callback) => {
  const { sub, email } = event.request.userAttributes;
  const currentUnixTime = Date.now().toString();

  const params = {
    TableName: process.env.USERS_TABLE,
    Item: {
      id: { S: sub },
      email: { S: email },
      createdAt: { S: currentUnixTime },
      updatedAt: { S: currentUnixTime },
    },
  };

  await dynamodb.putItem(params).promise();

  callback(null, event);
};
