import { compose, concat, defaultTo, either, is, isEmpty, isNil, join, keys, length, of, unless, useWith } from 'ramda';

export const count = compose(length, unless(is(Array), keys));
export const renderLines = join('\n');
export const collect = useWith(concat, [of, defaultTo([])]);
export const isEmptyOrNil = either(isEmpty, isNil);
