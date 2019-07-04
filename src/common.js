import { compose, init, is, keys, last, length, unless } from 'ramda';

export const count = compose(length, unless(is(Array), keys));

export const unpromisify = handler => (...args) => {
    const params = init(args);
    const callback = last(args);
    handler(...params)
        .then(result => callback(null, result))
        .catch(callback);
};
