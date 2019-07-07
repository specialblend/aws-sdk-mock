
/**
 * aws-sdk mock generated with the @specialblend/aws-sdk-mock
 * @see https://github.com/specialblend/aws-sdk-mock
 * @example aws-sdk-mock -s S3 -s DynamoDB -o __mocks__/aws-sdk.js
 */

import unpromisify from '@specialblend/unpromisify';

const AWS = {};

export const S3 = jest.fn();
S3.abortMultipartUpload = jest.fn();
S3.prototype.abortMultipartUpload = jest.fn(unpromisify(S3.abortMultipartUpload));
S3.completeMultipartUpload = jest.fn();
S3.prototype.completeMultipartUpload = jest.fn(unpromisify(S3.completeMultipartUpload));
S3.copyObject = jest.fn();
S3.prototype.copyObject = jest.fn(unpromisify(S3.copyObject));
S3.createMultipartUpload = jest.fn();
S3.prototype.createMultipartUpload = jest.fn(unpromisify(S3.createMultipartUpload));
S3.deleteBucket = jest.fn();
S3.prototype.deleteBucket = jest.fn(unpromisify(S3.deleteBucket));
S3.deleteBucketAnalyticsConfiguration = jest.fn();
S3.prototype.deleteBucketAnalyticsConfiguration = jest.fn(unpromisify(S3.deleteBucketAnalyticsConfiguration));
S3.deleteBucketCors = jest.fn();
S3.prototype.deleteBucketCors = jest.fn(unpromisify(S3.deleteBucketCors));
S3.deleteBucketEncryption = jest.fn();
S3.prototype.deleteBucketEncryption = jest.fn(unpromisify(S3.deleteBucketEncryption));
S3.deleteBucketInventoryConfiguration = jest.fn();
S3.prototype.deleteBucketInventoryConfiguration = jest.fn(unpromisify(S3.deleteBucketInventoryConfiguration));
S3.deleteBucketLifecycle = jest.fn();
S3.prototype.deleteBucketLifecycle = jest.fn(unpromisify(S3.deleteBucketLifecycle));
S3.deleteBucketMetricsConfiguration = jest.fn();
S3.prototype.deleteBucketMetricsConfiguration = jest.fn(unpromisify(S3.deleteBucketMetricsConfiguration));
S3.deleteBucketPolicy = jest.fn();
S3.prototype.deleteBucketPolicy = jest.fn(unpromisify(S3.deleteBucketPolicy));
S3.deleteBucketReplication = jest.fn();
S3.prototype.deleteBucketReplication = jest.fn(unpromisify(S3.deleteBucketReplication));
S3.deleteBucketTagging = jest.fn();
S3.prototype.deleteBucketTagging = jest.fn(unpromisify(S3.deleteBucketTagging));
S3.deleteBucketWebsite = jest.fn();
S3.prototype.deleteBucketWebsite = jest.fn(unpromisify(S3.deleteBucketWebsite));
S3.deleteObject = jest.fn();
S3.prototype.deleteObject = jest.fn(unpromisify(S3.deleteObject));
S3.deleteObjectTagging = jest.fn();
S3.prototype.deleteObjectTagging = jest.fn(unpromisify(S3.deleteObjectTagging));
S3.deleteObjects = jest.fn();
S3.prototype.deleteObjects = jest.fn(unpromisify(S3.deleteObjects));
S3.deletePublicAccessBlock = jest.fn();
S3.prototype.deletePublicAccessBlock = jest.fn(unpromisify(S3.deletePublicAccessBlock));
S3.getBucketAccelerateConfiguration = jest.fn();
S3.prototype.getBucketAccelerateConfiguration = jest.fn(unpromisify(S3.getBucketAccelerateConfiguration));
S3.getBucketAcl = jest.fn();
S3.prototype.getBucketAcl = jest.fn(unpromisify(S3.getBucketAcl));
S3.getBucketAnalyticsConfiguration = jest.fn();
S3.prototype.getBucketAnalyticsConfiguration = jest.fn(unpromisify(S3.getBucketAnalyticsConfiguration));
S3.getBucketCors = jest.fn();
S3.prototype.getBucketCors = jest.fn(unpromisify(S3.getBucketCors));
S3.getBucketEncryption = jest.fn();
S3.prototype.getBucketEncryption = jest.fn(unpromisify(S3.getBucketEncryption));
S3.getBucketInventoryConfiguration = jest.fn();
S3.prototype.getBucketInventoryConfiguration = jest.fn(unpromisify(S3.getBucketInventoryConfiguration));
S3.getBucketLifecycle = jest.fn();
S3.prototype.getBucketLifecycle = jest.fn(unpromisify(S3.getBucketLifecycle));
S3.getBucketLifecycleConfiguration = jest.fn();
S3.prototype.getBucketLifecycleConfiguration = jest.fn(unpromisify(S3.getBucketLifecycleConfiguration));
S3.getBucketLocation = jest.fn();
S3.prototype.getBucketLocation = jest.fn(unpromisify(S3.getBucketLocation));
S3.getBucketLogging = jest.fn();
S3.prototype.getBucketLogging = jest.fn(unpromisify(S3.getBucketLogging));
S3.getBucketMetricsConfiguration = jest.fn();
S3.prototype.getBucketMetricsConfiguration = jest.fn(unpromisify(S3.getBucketMetricsConfiguration));
S3.getBucketNotification = jest.fn();
S3.prototype.getBucketNotification = jest.fn(unpromisify(S3.getBucketNotification));
S3.getBucketNotificationConfiguration = jest.fn();
S3.prototype.getBucketNotificationConfiguration = jest.fn(unpromisify(S3.getBucketNotificationConfiguration));
S3.getBucketPolicy = jest.fn();
S3.prototype.getBucketPolicy = jest.fn(unpromisify(S3.getBucketPolicy));
S3.getBucketPolicyStatus = jest.fn();
S3.prototype.getBucketPolicyStatus = jest.fn(unpromisify(S3.getBucketPolicyStatus));
S3.getBucketReplication = jest.fn();
S3.prototype.getBucketReplication = jest.fn(unpromisify(S3.getBucketReplication));
S3.getBucketRequestPayment = jest.fn();
S3.prototype.getBucketRequestPayment = jest.fn(unpromisify(S3.getBucketRequestPayment));
S3.getBucketTagging = jest.fn();
S3.prototype.getBucketTagging = jest.fn(unpromisify(S3.getBucketTagging));
S3.getBucketVersioning = jest.fn();
S3.prototype.getBucketVersioning = jest.fn(unpromisify(S3.getBucketVersioning));
S3.getBucketWebsite = jest.fn();
S3.prototype.getBucketWebsite = jest.fn(unpromisify(S3.getBucketWebsite));
S3.getObject = jest.fn();
S3.prototype.getObject = jest.fn(unpromisify(S3.getObject));
S3.getObjectAcl = jest.fn();
S3.prototype.getObjectAcl = jest.fn(unpromisify(S3.getObjectAcl));
S3.getObjectLegalHold = jest.fn();
S3.prototype.getObjectLegalHold = jest.fn(unpromisify(S3.getObjectLegalHold));
S3.getObjectLockConfiguration = jest.fn();
S3.prototype.getObjectLockConfiguration = jest.fn(unpromisify(S3.getObjectLockConfiguration));
S3.getObjectRetention = jest.fn();
S3.prototype.getObjectRetention = jest.fn(unpromisify(S3.getObjectRetention));
S3.getObjectTagging = jest.fn();
S3.prototype.getObjectTagging = jest.fn(unpromisify(S3.getObjectTagging));
S3.getObjectTorrent = jest.fn();
S3.prototype.getObjectTorrent = jest.fn(unpromisify(S3.getObjectTorrent));
S3.getPublicAccessBlock = jest.fn();
S3.prototype.getPublicAccessBlock = jest.fn(unpromisify(S3.getPublicAccessBlock));
S3.headBucket = jest.fn();
S3.prototype.headBucket = jest.fn(unpromisify(S3.headBucket));
S3.headObject = jest.fn();
S3.prototype.headObject = jest.fn(unpromisify(S3.headObject));
S3.listBucketAnalyticsConfigurations = jest.fn();
S3.prototype.listBucketAnalyticsConfigurations = jest.fn(unpromisify(S3.listBucketAnalyticsConfigurations));
S3.listBucketInventoryConfigurations = jest.fn();
S3.prototype.listBucketInventoryConfigurations = jest.fn(unpromisify(S3.listBucketInventoryConfigurations));
S3.listBucketMetricsConfigurations = jest.fn();
S3.prototype.listBucketMetricsConfigurations = jest.fn(unpromisify(S3.listBucketMetricsConfigurations));
S3.listBuckets = jest.fn();
S3.prototype.listBuckets = jest.fn(unpromisify(S3.listBuckets));
S3.listMultipartUploads = jest.fn();
S3.prototype.listMultipartUploads = jest.fn(unpromisify(S3.listMultipartUploads));
S3.listObjectVersions = jest.fn();
S3.prototype.listObjectVersions = jest.fn(unpromisify(S3.listObjectVersions));
S3.listObjects = jest.fn();
S3.prototype.listObjects = jest.fn(unpromisify(S3.listObjects));
S3.listObjectsV2 = jest.fn();
S3.prototype.listObjectsV2 = jest.fn(unpromisify(S3.listObjectsV2));
S3.listParts = jest.fn();
S3.prototype.listParts = jest.fn(unpromisify(S3.listParts));
S3.putBucketAccelerateConfiguration = jest.fn();
S3.prototype.putBucketAccelerateConfiguration = jest.fn(unpromisify(S3.putBucketAccelerateConfiguration));
S3.putBucketAcl = jest.fn();
S3.prototype.putBucketAcl = jest.fn(unpromisify(S3.putBucketAcl));
S3.putBucketAnalyticsConfiguration = jest.fn();
S3.prototype.putBucketAnalyticsConfiguration = jest.fn(unpromisify(S3.putBucketAnalyticsConfiguration));
S3.putBucketCors = jest.fn();
S3.prototype.putBucketCors = jest.fn(unpromisify(S3.putBucketCors));
S3.putBucketEncryption = jest.fn();
S3.prototype.putBucketEncryption = jest.fn(unpromisify(S3.putBucketEncryption));
S3.putBucketInventoryConfiguration = jest.fn();
S3.prototype.putBucketInventoryConfiguration = jest.fn(unpromisify(S3.putBucketInventoryConfiguration));
S3.putBucketLifecycle = jest.fn();
S3.prototype.putBucketLifecycle = jest.fn(unpromisify(S3.putBucketLifecycle));
S3.putBucketLifecycleConfiguration = jest.fn();
S3.prototype.putBucketLifecycleConfiguration = jest.fn(unpromisify(S3.putBucketLifecycleConfiguration));
S3.putBucketLogging = jest.fn();
S3.prototype.putBucketLogging = jest.fn(unpromisify(S3.putBucketLogging));
S3.putBucketMetricsConfiguration = jest.fn();
S3.prototype.putBucketMetricsConfiguration = jest.fn(unpromisify(S3.putBucketMetricsConfiguration));
S3.putBucketNotification = jest.fn();
S3.prototype.putBucketNotification = jest.fn(unpromisify(S3.putBucketNotification));
S3.putBucketNotificationConfiguration = jest.fn();
S3.prototype.putBucketNotificationConfiguration = jest.fn(unpromisify(S3.putBucketNotificationConfiguration));
S3.putBucketPolicy = jest.fn();
S3.prototype.putBucketPolicy = jest.fn(unpromisify(S3.putBucketPolicy));
S3.putBucketReplication = jest.fn();
S3.prototype.putBucketReplication = jest.fn(unpromisify(S3.putBucketReplication));
S3.putBucketRequestPayment = jest.fn();
S3.prototype.putBucketRequestPayment = jest.fn(unpromisify(S3.putBucketRequestPayment));
S3.putBucketTagging = jest.fn();
S3.prototype.putBucketTagging = jest.fn(unpromisify(S3.putBucketTagging));
S3.putBucketVersioning = jest.fn();
S3.prototype.putBucketVersioning = jest.fn(unpromisify(S3.putBucketVersioning));
S3.putBucketWebsite = jest.fn();
S3.prototype.putBucketWebsite = jest.fn(unpromisify(S3.putBucketWebsite));
S3.putObject = jest.fn();
S3.prototype.putObject = jest.fn(unpromisify(S3.putObject));
S3.putObjectAcl = jest.fn();
S3.prototype.putObjectAcl = jest.fn(unpromisify(S3.putObjectAcl));
S3.putObjectLegalHold = jest.fn();
S3.prototype.putObjectLegalHold = jest.fn(unpromisify(S3.putObjectLegalHold));
S3.putObjectLockConfiguration = jest.fn();
S3.prototype.putObjectLockConfiguration = jest.fn(unpromisify(S3.putObjectLockConfiguration));
S3.putObjectRetention = jest.fn();
S3.prototype.putObjectRetention = jest.fn(unpromisify(S3.putObjectRetention));
S3.putObjectTagging = jest.fn();
S3.prototype.putObjectTagging = jest.fn(unpromisify(S3.putObjectTagging));
S3.putPublicAccessBlock = jest.fn();
S3.prototype.putPublicAccessBlock = jest.fn(unpromisify(S3.putPublicAccessBlock));
S3.restoreObject = jest.fn();
S3.prototype.restoreObject = jest.fn(unpromisify(S3.restoreObject));
S3.selectObjectContent = jest.fn();
S3.prototype.selectObjectContent = jest.fn(unpromisify(S3.selectObjectContent));
S3.uploadPart = jest.fn();
S3.prototype.uploadPart = jest.fn(unpromisify(S3.uploadPart));
S3.uploadPartCopy = jest.fn();
S3.prototype.uploadPartCopy = jest.fn(unpromisify(S3.uploadPartCopy));
AWS.S3 = S3;

export default AWS;
