const AWS = require('aws-sdk');
const { compose, filter, is, keys, omit } = require('ramda');

const isFunction = is(Function);
const getPrototype = Object.getPrototypeOf;
const withoutConstructor = omit(['constructor']);
const getServiceMethods = compose(keys, withoutConstructor, filter(isFunction), getPrototype);

const introspectService = name => {
    const { [name]: Factory } = AWS;
    const endpoint = 'example.com';
    const instance = new Factory({ endpoint });
    return getServiceMethods(instance);
};

module.exports = introspectService;
