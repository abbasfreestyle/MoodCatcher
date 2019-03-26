import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import theme from 'theme';

import Chip from '..';

const requiredProps = {
  text: 'Happy'
};

const wrapper = shallow(<Chip {...requiredProps} />);

describe('Chip.', () => {
  describe('Snapshots.', () => {
    afterEach(() => {
      wrapper.setProps({ ...Chip.defaultProps, ...requiredProps });
    });

    test('should match default props', () => {
      expect(Chip.defaultProps).toMatchSnapshot();
    });

    test('should match with default props provided', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when a different background color is provided', () => {
      wrapper.setProps({ backgroundColor: theme.surface });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
