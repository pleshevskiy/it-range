module.exports = {
    testRegex: 'tests/.*\\.test\\.ts',
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'js', 'json'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
};
