import json from 'rollup-plugin-json';
import packageJSON from './package.json';

export default [
    {
        input: 'src/index.js',
        output: {
            name: 'index',
            file: packageJSON.browser,
            format: 'umd',
        },
    },
    {
        input: 'src/index.js',
        output: [
            {
                file: packageJSON.main,
                format: 'cjs',
            },
            {
                file: packageJSON.module,
                format: 'esm',
            },
        ],
    },
    {
        input: 'src/bin/app.js',
        output: {
            banner: '#!/usr/bin/env ./node_modules/.bin/babel-node',
            file: packageJSON.bin['aws-sdk-mock'],
            format: 'esm',
        },
    },
    {
        plugins: [
            json({
                include: './manifest.json',
            }),
        ],
        input: 'manifest.json',
        output: {
            name: 'manifest',
            file: './bin/manifest.js',
            format: 'cjs',
        },
    },
];
