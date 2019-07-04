import { callbackify } from 'util';

export const S3 = jest.fn();
S3.createBucket = jest.fn();
S3.prototype.createBucket = jest.fn(callbackify(S3.createBucket));

export default { S3 };
