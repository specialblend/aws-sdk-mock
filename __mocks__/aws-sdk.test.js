import { S3 } from 'aws-sdk';

describe('service', () => {
    test('is a function', () => {
        expect(S3).toBeFunction();
    });
    test('has expected static method listBuckets', () => {
        expect(S3.listBuckets).toBeFunction();
    });
    describe('instance', () => {
        const options = Symbol('options');
        const s3 = new S3(options);
        test('calls constructor with expected options', () => {
            expect(S3).toHaveBeenCalledWith(options);
        });
        describe('*[method]', () => {
            test('is a function', () => {
                expect(S3.listBuckets).toBeFunction();
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
                    S3.listBuckets.mockResolvedValueOnce(baz);
                    s3.listBuckets(...params, (err, data) => {
                        resolveResponse = [err, data];
                    });
                    S3.listBuckets.mockRejectedValueOnce(faz);
                    s3.listBuckets(...params, (err, data) => {
                        rejectResponse = [err, data];
                    });
                });
                test('calls static async handler correctly', () => {
                    expect(S3.listBuckets).toHaveBeenCalledWith(...params);
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
