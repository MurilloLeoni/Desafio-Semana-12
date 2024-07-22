export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.tsx?$": "ts-jest"  // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.app.json'  // Adicione esta linha para garantir que `ts-jest` use o `tsconfig.app.json`
      }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
  