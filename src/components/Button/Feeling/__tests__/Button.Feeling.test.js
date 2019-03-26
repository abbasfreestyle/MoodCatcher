import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Feeling from '..';

const requiredProps = {
  children: 'Happy',
  onPress: jest.fn()
};

jest.useFakeTimers();

const wrapper = shallow(<Feeling {...requiredProps} />);

describe('Button > Feeling.', () => {
  describe('Snapshots.', () => {
    afterEach(() => {
      wrapper.setProps({ ...Feeling.defaultProps, ...requiredProps });
      jest.advanceTimersByTime(0);
    });

    test('should match default props', () => {
      expect(Feeling.defaultProps).toMatchSnapshot();
    });

    test('should match with default props provided', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when selected is true', () => {
      wrapper.setProps({ selected: true });
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
