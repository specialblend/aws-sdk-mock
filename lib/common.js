const { compose, concat, converge, curry, defaultTo, either, is, isEmpty, isNil, join, keys, length, of, unless, useWith, values, zipWith } = require('ramda');

const count = compose(length, unless(is(Array), keys));
const renderLines = join('\n');
const collect = useWith(concat, [of, defaultTo([])]);
const isEmptyOrNil = either(isEmpty, isNil);
const mapEntries = curry((handler, data) => converge(zipWith(handler), [keys, values])(data));

module.exports = {
    collect,
    count,
    isEmptyOrNil,
    mapEntries,
    renderLines,
};
