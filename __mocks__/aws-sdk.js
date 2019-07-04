import { unpromisify } from '../src/common';

export const S3 = jest.fn();
S3.createBucket = jest.fn();
S3.prototype.createBucket = jest.fn(unpromisify(S3.createBucket));

export default { S3 };
