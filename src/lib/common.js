import { compose, concat, defaultTo, is, join, keys, length, of, unless, useWith } from 'ramda';

export const count = compose(length, unless(is(Array), keys));
export const renderLines = join('\n');
export const collect = useWith(concat, [of, defaultTo([])]);
