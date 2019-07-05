const { map, pipe, tap, zipObj } = require('ramda');
const introspectService = require('./service');

const buildManifest = (serviceNames, logger = console.log) => {
    const mapServices = map(
        pipe(
            tap(logger),
            introspectService
        )
    );
    const services = zipObj(serviceNames, mapServices(serviceNames));
    return { services };
};

module.exports = buildManifest;
