import AWS from 'aws-sdk';

const service = 'S3';

describe('service', () => {
    const { [service]: ServiceFactory } = AWS;
    test('is a function', () => {
        expect(ServiceFactory).toBeFunction();
    });
    test('has expected static method createBucket', () => {
        expect(ServiceFactory.createBucket).toBeFunction();
    });
    describe('instance', () => {
        const options = Symbol('options');
        const serviceInstance = new ServiceFactory(options);
        test('calls constructor with expected options', () => {
            expect(ServiceFactory).toHaveBeenCalledWith(options);
        });
        describe('*.createBucket', () => {
            test('is a function', () => {
                expect(serviceInstance.createBucket).toBeFunction();
            });
            describe('when called', () => {
                const foo = Symbol('foo');
                const bar = Symbol('bar');
                const baz = Symbol('baz');
                const faz = Symbol('faz');
                const params = [foo, bar];
                let okResponse = null;
                let failResponse = null;
                beforeAll(() => {
                    ServiceFactory.createBucket.mockResolvedValueOnce(baz);
                    serviceInstance.createBucket(...params, (...response) => {
                        okResponse = response;
                    });
                    ServiceFactory.createBucket.mockRejectedValueOnce(faz);
                    serviceInstance.createBucket(...params, (...response) => {
                        failResponse = response;
                    });
                });
                test('calls static async handler correctly', () => {
                    expect(ServiceFactory.createBucket).toHaveBeenCalledWith(...params);
                });
                test('invokes callback with resolved result of async handler', () => {
                    const [err, result] = okResponse;
                    expect(err).toBeNull();
                    expect(result).toBe(baz);
                });
                test('invokes callback with rejected result of async handler', () => {
                    const [err, result] = failResponse;
                    expect(err).toBe(faz);
                    expect(result).toBeUndefined();
                });
            });
        });
    });
});
