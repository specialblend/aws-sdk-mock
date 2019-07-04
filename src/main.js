/* eslint-disable import/no-extraneous-dependencies */

const AWS = require('aws-sdk');
const mockService = require('./common');

jest.mock('aws-sdk');

const services = ['S3'];
services.map(mockService(AWS));
