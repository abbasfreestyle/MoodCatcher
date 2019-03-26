export const name = {
  correct: 'MockReducer',
  lowerCase: 'mockReducer',
  invalid: [123, { object: 'object' }, ['array']],
  empty: [undefined, null, false, 0]
};

export const actionTypes = {
  invalid: [['array'], 'string', 123, null, undefined, false],
  mock: {
    MOCK_LOAD: 'MOCK_LOAD',
    MOCK_LOAD_SUCCESS: 'MOCK_LOAD_SUCCESS',
    MOCK_LOAD_ERROR: 'MOCK_LOAD_ERROR'
  },
  expect: {
    MOCK_LOAD: `${name.correct}/MOCK_LOAD`,
    MOCK_LOAD_SUCCESS: `${name.correct}/MOCK_LOAD_SUCCESS`,
    MOCK_LOAD_ERROR: `${name.correct}/MOCK_LOAD_ERROR`
  },
  lowerCases: [
    {
      mock_load: 'MOCK_LOAD'
    },
    { MOCK_LOAD: 'mock_load' },
    { mock_load: 'mock_load' }
  ]
};
