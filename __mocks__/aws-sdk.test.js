import AWS from 'aws-sdk';

const service = 'S3';
const method = 'createBucket';

describe('service', () => {
    const { [service]: ServiceFactory } = AWS;
    test('is a function', () => {
        expect(ServiceFactory).toBeFunction();
    });
    test('has expected static method createBucket', () => {
        expect(ServiceFactory[method]).toBeFunction();
    });
    describe('instance', () => {
        const options = Symbol('options');
        const serviceInstance = new ServiceFactory(options);
        test('calls constructor with expected options', () => {
            expect(ServiceFactory).toHaveBeenCalledWith(options);
        });
        describe('*[method]', () => {
            test('is a function', () => {
                expect(serviceInstance[method]).toBeFunction();
            });
            describe('when called', () => {
                const foo = Symbol('foo');
                const bar = Symbol('bar');
                const baz = Symbol('baz');
                const faz = Symbol('faz');
                const params = [foo, bar];
                let resolveResponse = null;
                let rejectResponse = null;
                beforeAll(() => {
                    ServiceFactory[method].mockResolvedValueOnce(baz);
                    serviceInstance[method](...params, (err, data) => {
                        resolveResponse = [err, data];
                    });
                    ServiceFactory[method].mockRejectedValueOnce(faz);
                    serviceInstance[method](...params, (err, data) => {
                        rejectResponse = [err, data];
                    });
                });
                test('calls static async handler correctly', () => {
                    expect(ServiceFactory[method]).toHaveBeenCalledWith(...params);
                });
                test('invokes callback with resolved result of async handler', () => {
                    const [err, result] = resolveResponse;
                    expect(err).toBeNull();
                    expect(result).toBe(baz);
                });
                test('invokes callback with rejected result of async handler', () => {
                    const [err, result] = rejectResponse;
                    expect(err).toBe(faz);
                    expect(result).toBeUndefined();
                });
            });
        });
    });
});
