module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/client/src/tests/setupTests.js'],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  // transform: {
  //   "^.+\\.[t|j]sx?$": "babel-jest",
  // },
  transform: { ".*": "<rootDir>/node_modules/babel-jest" },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    // "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
};