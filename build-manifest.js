import fs from 'fs';
import { promisify } from 'util';
import { concat, converge, identity, map, objOf, pipe, tap, zipObj } from 'ramda';
import { introspectService } from './src/service';
import { count } from './src/common';
import { output, services } from './build.config.json';

const OUTPUT_FILE_PATH = output.manifest;

const writeFile = promisify(fs.writeFile);
const printServiceName = pipe(concat('Build service: '), console.log);
const printManifestSummary = (result, filename) => console.log(`Built manifest for (${count(result.services)}) services to file: ${filename}.`);

const buildManifest = pipe(
    converge(
        zipObj,
        [
            identity,
            map(
                pipe(
                    tap(printServiceName),
                    introspectService
                )
            ),
        ]),
    objOf('services')
);

const manifest = buildManifest(services);
const contents = JSON.stringify(manifest, null, 4);

writeFile(OUTPUT_FILE_PATH, contents)
    .then(() => printManifestSummary(manifest, OUTPUT_FILE_PATH));
