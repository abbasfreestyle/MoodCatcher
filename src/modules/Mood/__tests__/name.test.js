import * as name from '../name';

describe('Modules > Mood > Name', () => {
  test('should match the snapshot', () => {
    expect(name).toMatchSnapshot();
  });
});
