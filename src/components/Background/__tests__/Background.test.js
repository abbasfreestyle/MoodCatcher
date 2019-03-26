import React from 'react';
import { View, Text } from 'react-native';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Background from '..';

const requiredProps = {
  children: (
    <View>
      <Text>Test Content</Text>
    </View>
  )
};

const wrapper = shallow(<Background {...requiredProps} />);

describe('Background.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
