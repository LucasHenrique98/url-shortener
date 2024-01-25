/** @type {import('jest').config} */

const config = {
  testEnvironment: 'jest-environment-node',
  verbose: true,
  setupFiles: ['./test/setup.js']
};