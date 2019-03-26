import listMoods from '../listMoods';

describe('Schemes > Query > List Moods', () => {
  test('should match the snapshot', () => {
    expect(listMoods).toMatchSnapshot();
  });
});
