module.exports = {
    collectCoverageFrom: [
        '**/*.js',
        '**/*.jsx',
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/coverage/',
        '<rootDir>/jest.config.js',
        '<rootDir>/rollup.config.js',
    ],
    globalSetup: './__mocks__/environment.js',
    setupFilesAfterEnv: ['./__mocks__/support.js'],
    testEnvironment: 'node',
};
