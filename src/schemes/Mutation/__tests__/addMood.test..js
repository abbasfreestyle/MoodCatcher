import addMood from '../addMood';

describe('Schemes > Mutation > Add Mood', () => {
  test('should match the snapshot', () => {
    expect(addMood).toMatchSnapshot();
  });
});
