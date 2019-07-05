#!/usr/bin/env node

const assert = require('assert');
const cli = require('commander');
const { writeFileSync } = require('fs');
const { pick, prop } = require('ramda');
const { count, collect, isEmptyOrNil } = require('./lib/common');
const buildMocks = require('./lib/mocks');
const manifest = require('./manifest.json');

const argv = process.argv;
const availableServices = prop('services', manifest);
const logger = name => console.log(`Building mocks for service: ${name}`);

const handleBuild = (outputFile, selectedServices) => {
    console.log('Building mocks for services:', selectedServices, ' to file: ', outputFile);
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
    .command('build <outputFile>')
    .description('build mocks for selected AWS SDK services')
    .option('-s, --service <name>', 'Add a AWS SDK service (case-sensitive)', collect)
    .action((outputFile, args) => {
        try {
            assert(!isEmptyOrNil(args.service), 'Please specify at least one service');
            handleBuild(outputFile, args.service);
        } catch (err) {
            console.error(err);
            console.debug({ outputFile, args });
        }
    });

cli
    .command('build-all <outputFile>', 'build mocks for all AWS SDK services')
    .action((cmd, outputFile) => {
        try {
            handleBuildAll(outputFile);
        } catch (err) {
            console.error(err);
            console.debug({ cmd, outputFile });
        }
    });

cli.parse(argv);
