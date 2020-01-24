module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  cache: false,
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'vue', 'json'],
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/src/components/**/*.vue',
  //   '<rootDir>/src/pages/**/*.vue',
  //   '<rootDir>/src/**/*.ts'
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100
  //   }
  // },
  testURL: "http://localhost/"
}
