#!/usr/bin/env node

const { writeFile } = require('fs');
const { count } = require('../lib/common');
const { outputFilePath, services } = require('../build.config.json');
const buildManifest = require('../lib/manifest');

const logger = name => console.log(`Building service: ${name}`);

const manifest = buildManifest(services, logger);
const contents = JSON.stringify(manifest, null, 4);

writeFile(outputFilePath, contents, err => {
    if (err) {
        throw err;
    }
    console.log(`Built manifest for (${count(services)}) services to file: ${outputFilePath}`);
});
