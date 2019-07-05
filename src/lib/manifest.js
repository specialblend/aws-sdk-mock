import { map, pipe, tap, zipObj } from 'ramda';
import { introspectService } from './service';

export const buildManifest = (serviceNames, logger = console.log) => {
    const mapServices = map(
        pipe(
            tap(logger),
            introspectService
        )
    );
    const services = zipObj(serviceNames, mapServices(serviceNames));
    return { services };
};
