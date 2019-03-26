import addFeeling from '../addFeeling';

describe('Schemes > Mutation > Add Feeling', () => {
  test('should match the snapshot', () => {
    expect(addFeeling).toMatchSnapshot();
  });
});
