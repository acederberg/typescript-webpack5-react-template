/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testMatch : [
    "**/*.test.ts"
  ],
  testEnvironment: 'node',
  testTimeout : 50000,
  collectCoverage : true,
  coverageDirectory : "coverage",
  coverageProvider : "v8"
};
