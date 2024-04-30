export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        '^@routes/(.*)$': '<rootDir>/src/routes/$1',
        '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
        '^@databases/(.*)$': '<rootDir>/src/databases/$1',
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@storage/(.*)$': '<rootDir>/src/storage/$1',
        '^@schemas/(.*)$': '<rootDir>/src/schemas/$1',
        '^@tests/(.*)$': '<rootDir>/src/tests/$1',
        '^@mocks/(.*)$': '<rootDir>/src/mocks/$1'
      }
}