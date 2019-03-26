import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from '..';

const requiredProps = {
  navigation: { navigate: jest.fn() },
  screenProps: { authData: { username: 'Test user' } }
};

const wrapper = shallow(<Home {...requiredProps} />);

describe('Screens > Home', () => {
  describe('Snapshots', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
