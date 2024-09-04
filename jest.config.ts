import type { JestConfigWithTsJest } from 'ts-jest';

import 'jest-extended';

const jestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  moduleDirectories: ['./node_modules', './src'],
  moduleNameMapper: {
    '@app/(.*)': './src/app/$1',
    'tests/(.*)': '<rootDir>/tests/$1',
    '_types/(.*)': '<rootDir>/src/types/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  reporters: ['default', 'jest-html-reporters'],
  rootDir: '.',
  roots: ['tests'],
  setupFilesAfterEnv: ['./jest.setup.ts', 'jest-extended/all'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/**/*.[jt]s?(x)', '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['./node_modules/', './.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
      },
    ],
  },
  verbose: true,
};

export default jestConfig;
