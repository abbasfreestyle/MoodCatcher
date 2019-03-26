import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ThanksScreen } from '..';

const requiredProps = {
  navigation: { navigate: jest.fn() },
  post: {
    mood: 6,
    feelings: [{ id: 1, name: 'Relaxed' }]
  },
  onResetEverything: jest.fn(),
  screenProps: { authData: { username: 'Test user' } }
};

const defaultState = {
  loading: true,
  error: false
};

const wrapper = shallow(<ThanksScreen {...requiredProps} />);

describe('Screens > Thanks', () => {
  describe('Snapshots', () => {
    afterEach(() => {
      wrapper.setState(defaultState);
    });

    test('should match with default state', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when loading is true', () => {
      wrapper.setState({ loading: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when error is true', () => {
      wrapper.setState({ loading: false, error: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when all is well', () => {
      wrapper.setState({ loading: false, error: false });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
