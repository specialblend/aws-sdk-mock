const { curry, map, trim } = require('ramda');
const { mapEntries, renderLines } = require('./common');

const perMethod = curry((service, method) => trim(`
${service}.${method} = jest.fn();
${service}.prototype.${method} = jest.fn(unpromisify(${service}.${method}));
`));

const forMethods = curry(
    (service, methods) =>
        renderLines(
            map(perMethod(service), methods)
        ),
);

const perService = curry((service, methods) => `
export const ${service} = jest.fn();
${forMethods(service, methods)}
AWS.${service} = ${service};`);

const forServices = (services, logger) =>
    renderLines(
        mapEntries(
            (service, methods) => {
                logger(service);
                return perService(service, methods);
            },
            services,
        )
    );

const buildMocks = (services, logger = console.log) => `
import unpromisify from '@specialblend/unpromisify';

const AWS = {};

${forServices(services, logger)}

export default AWS;
`;

module.exports = buildMocks;
