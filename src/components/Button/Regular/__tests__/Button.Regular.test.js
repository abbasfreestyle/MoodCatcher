import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Regular from '..';

const requiredProps = {
  children: 'Happy',
  onPress: jest.fn()
};

jest.useFakeTimers();

const wrapper = shallow(<Regular {...requiredProps} />);

describe('Button > Regular.', () => {
  describe('Snapshots.', () => {
    afterEach(() => {
      wrapper.setProps({ ...Regular.defaultProps, ...requiredProps });
      jest.advanceTimersByTime(0);
    });

    test('should match default props', () => {
      expect(Regular.defaultProps).toMatchSnapshot();
    });

    test('should match with default props provided', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when disabled is true', () => {
      wrapper.setProps({ disabled: true });
      jest.advanceTimersByTime(200);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when flex is true', () => {
      wrapper.setProps({ flex: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when margin is different', () => {
      wrapper.setProps({ margin: 20 });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
