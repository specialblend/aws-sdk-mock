#!/usr/bin/env node

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

cli
    .description('build mocks for selected AWS SDK services')
    .option('-o, --output <outputFile>', 'Specify the output file', '__mocks__/aws-sdk.js')
    .option('-s, --service <name>', 'Add a AWS SDK service (case-sensitive)', collect, [])
    .action(args => {
        if (isEmptyOrNil(args.service)) {
            console.error('Please specify at least one service\n');
            cli.outputHelp(output => {
                console.log(output);
                process.exit(1);
            });
        }
        try {
            handleBuild(args.output, args.service);
            process.exit(0);
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    });

cli.parse(argv);
