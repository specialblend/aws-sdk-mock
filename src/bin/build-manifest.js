import { writeFile } from 'fs';
import { buildManifest } from '../lib/manifest';
import { count } from '../lib/common';
import { output, services } from '../../build.config.json';

const { manifest: outputFilePath } = output;

const logger = name => console.log(`Building service: ${name}`);

const manifest = buildManifest(services, logger);
const contents = JSON.stringify(manifest, null, 4);

writeFile(outputFilePath, contents, err => {
    if (err) {
        throw err;
    }
    console.log(`Built manifest for (${count(services)}) services to file: ${outputFilePath}`);
});
