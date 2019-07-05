import app from 'commander';
import { writeFileSync } from 'fs';
import { identity, pick, prop, useWith } from 'ramda';
import { buildMocks } from '../lib/mocks';
import { collect, count } from '../lib/common';

const manifest = require('./manifest');
const availableServices = prop('services', manifest);
const logger = name => console.log(`Building mocks for service: ${name}`);

const handleBuild = (outputFile, selectedServices) => {
    const enabledServices = pick(selectedServices, availableServices);
    const contents = buildMocks(enabledServices, logger);
    writeFileSync(outputFile, contents);
    console.log(`Built mocks for (${count(enabledServices)}) services to file: ${outputFile}.`);
};

app
    .command('build <outputFile>')
    .option('-s, --service <name>', 'Add a AWS services (case-sensitive)', collect, [])
    .action(useWith(handleBuild, [identity, prop('service')]));

app.parse(process.argv);
