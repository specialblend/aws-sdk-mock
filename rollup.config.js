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
                format: 'es',
            },
        ],
    },
    {
        input: 'src/bin/app.js',
        output: {
            file: packageJSON.bin['aws-sdk-mock'],
            format: 'cjs',
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
