import cli from 'commander';
import { writeFileSync } from 'fs';
import { pick, prop } from 'ramda';
import { buildMocks } from '../lib/mocks';
import { collect, count } from '../lib/common';

const manifest = require('./manifest');
const availableServices = prop('services', manifest);
const logger = name => console.log(`Building mocks for service: ${name}`);

const handleBuild = (outputFile, selectedServices) => {
    console.log('Building mocks for services:', selectedServices);
    const enabledServices = pick(selectedServices, availableServices);
    const contents = buildMocks(enabledServices, logger);
    writeFileSync(outputFile, contents);
    console.log(`Built mocks for (${count(enabledServices)}) services to file: ${outputFile}.`);
};

const handleBuildAll = outputFile => {
    console.log('Building mocks for all services');
    const enabledServices = availableServices;
    const contents = buildMocks(enabledServices, logger);
    writeFileSync(outputFile, contents);
    console.log(`Built mocks for (${count(enabledServices)}) services to file: ${outputFile}.`);
};

cli
    .command('build <outputFile>', 'build mocks for selected AWS SDK services')
    .option('-s, --service <name>', 'Add a AWS SDK service (case-sensitive)', collect)
    .action((outputFile, args) => {
        handleBuild(outputFile, args.service);
    });

cli
    .command('build:all <outputFile>', 'build mocks for all AWS SDK services')
    .action(handleBuildAll);

cli.parse(process.argv);
