import * as Lambda from 'aws-lambda';

export const event: Lambda.APIGatewayEvent = {
  resource: '/yoshidasan',
  path: '/yoshidasan',
  httpMethod: 'POST',
  headers: {},
  queryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    accountId: '',
    apiId: '',
    httpMethod: 'POST',
    identity: {
      accessKey: null,
      accountId: null,
      apiKey: null,
      caller: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      sourceIp: '',
      user: null,
      userAgent: '',
      userArn: null
    },
    stage: 'prod',
    resourceId: '',
    requestTimeEpoch: 0,
    requestId: '',
    resourcePath: '/yoshidasan'
  },
  body: '{"bot_id":"xxxxx","user_id":"xxxxx","lang":"ja-JP","args":{"intent":"Greeting","utterance":"こんにちは","greeting":["こんにちは"]}}',
  isBase64Encoded: false
};
