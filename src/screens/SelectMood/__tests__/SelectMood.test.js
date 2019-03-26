import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SelectMoodScreen } from '..';

const requiredProps = {
  navigation: { navigate: jest.fn() },
  mood: 6,
  feelings: [],
  onSetMethod: jest.fn()
};

const wrapper = shallow(<SelectMoodScreen {...requiredProps} />);

describe('Screens > Select Mood', () => {
  describe('Snapshots', () => {
    test('should match screen', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
