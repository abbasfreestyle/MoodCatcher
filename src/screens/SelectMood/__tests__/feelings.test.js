import { feelingsList } from '../feelings';

describe('Screens > Select Mood > Feelints List', () => {
  test('should match snapshot of the list of feelings provided', () => {
    expect(feelingsList).toMatchSnapshot();
  });
});
