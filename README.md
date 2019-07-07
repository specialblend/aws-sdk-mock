# @specialblend/aws-sdk-mock

CLI utility to easily build mocks for [aws-sdk](https://github.com/aws/aws-sdk-js)

## installation

```bash
# install as project-level (recommended)

npm install -D @specialblend/aws-sdk-mock

# install as system-level

npm install -g @specialblend/aws-sdk-mock

```

## testing/mocking

```javascript
// foo.test.js

import { S3 } from 'aws-sdk'
import foo from './foo'

jest.mock('aws-sdk')

describe('foo', () => {
    const Key = 'example-key'
    const mockedBody = 'example body'
    const mockedResult = {
        Body: Buffer.from(mockedBody),
    }
    const expectedPayload = {
        Bucket: 'example-bucket',
        Key,
    }
    beforeAll(() => {
        S3.getObject.mockResolvedValueOnce(mockedResult)
    })
    test('calls S3.getObject with expected params', async() => {
        const result = await foo(Key)
        expect(S3.getObject).toHaveBeenCalledWith(expectedPayload)
        expect(result).toBe(mockedBody)
    })
})
```

## CLI examples

```bash

# generates mocks for S3, DynamoDB to file __mocks__/aws-sdk.js

aws-sdk-mock -s S3 -s DynamoDB

# generates mocks for SNS to file aws-sdk.mock.js

aws-sdk-mock -s S3 -s DynamoDB -o aws-sdk.mock.js

```

see example output in [__mocks__/aws-sdk.js](__mocks__/aws-sdk.js)

## CLI syntax
```
Usage: aws-sdk-mock [options]

build mocks for selected AWS SDK services

Options:
  -o, --output <outputFile>  Specify the output file (default: "__mocks__/aws-sdk.js")
  -s, --service <name>       Add a AWS SDK service (case-sensitive) (default: [])
  -h, --help                 output usage information

```
