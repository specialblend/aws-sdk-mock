import { curry, map, trim } from 'ramda';
import { renderLines } from './common';

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

const forServices = (services, logger) => {
    const mapped = Object
        .entries(services)
        .map(([serviceName, serviceMethods]) => {
            logger(serviceName);
            return perService(serviceName, serviceMethods);
        });
    return renderLines(mapped);
};

export const buildMocks = (services, logger = console.log) => `
import unpromisify from '@specialblend/unpromisify';

const AWS = {};

${forServices(services, logger)}

export default AWS;
`;
