# @specialblend/aws-sdk-mock

CLI utility to easily build mocks for [aws-sdk](https://github.com/aws/aws-sdk-js)

## installation

```bash
# install as project-level (recommended)

npm install -D @specialblend/aws-sdk-mock

# install as system-level

npm install -g @specialblend/aws-sdk-mock

```

## examples

```bash

# generates mocks for S3, DynamoDB to file __mocks__/aws-sdk.js

aws-sdk-mock -s S3 -s DynamoDB

# generates mocks for SNS to file aws-sdk.mock.js

aws-sdk-mock -s S3 -s DynamoDB -o aws-sdk.mock.js

```

see example output in [__mocks__/aws-sdk.js](__mocks__/aws-sdk.js)

## usage

