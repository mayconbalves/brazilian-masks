/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["<rootDir>/test/*.js"],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  testMatch: ["<rootDir>/test/*.js"]
};
