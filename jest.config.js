module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.js'],
  verbose: true,
  errorOnDeprecated: true,
  clearMocks: true,
};
