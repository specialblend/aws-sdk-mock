const { trim } = require('ramda');

const generateBanner = () => trim(`
/**
 * aws-sdk mock generated with the @specialblend/aws-sdk-mock
 * @see https://github.com/specialblend/aws-sdk-mock
 * @example aws-sdk-mock -s S3 -s DynamoDB -o __mocks__/aws-sdk.js
 */
`);

module.exports = generateBanner;
