import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Touchable from '..';

const requiredProps = {
  children: <Text>Test Button</Text>
};

const wrapper = shallow(<Touchable {...requiredProps} />);

describe('Touchable iOS.', () => {
  describe('Snapshots.', () => {
    beforeEach(() => {
      wrapper.setProps({ ...Touchable.defaultProps, ...requiredProps });
    });

    test('should match default props.', () => {
      expect(Touchable.defaultProps).toMatchSnapshot();
    });

    test('should match with default props provided.', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when border radius is changed', () => {
      wrapper.setProps({ borderRadius: 50 });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
