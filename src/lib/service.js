import AWS from 'aws-sdk';
import { compose, filter, is, keys, omit } from 'ramda';

const isFunction = is(Function);
const getPrototype = Object.getPrototypeOf;
const withoutConstructor = omit(['constructor']);
const getServiceMethods = compose(keys, withoutConstructor, filter(isFunction), getPrototype);

export const introspectService = name => {
    const { [name]: Factory } = AWS;
    const endpoint = 'example.com';
    const instance = new Factory({ endpoint });
    return getServiceMethods(instance);
};
