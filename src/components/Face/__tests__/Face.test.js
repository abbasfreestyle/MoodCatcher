import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Face from '..';

const requiredProps = {
  progress: 0.7
};

jest.useFakeTimers();

const wrapper = shallow(<Face {...requiredProps} />);

describe('Face.', () => {
  describe('Snapshots.', () => {
    afterEach(() => {
      wrapper.setProps({ ...Face.defaultProps, ...requiredProps });
    });

    test('should match default props', () => {
      expect(Face.defaultProps).toMatchSnapshot();
    });

    test('should match with default props provided', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match with a different size', () => {
      wrapper.setProps({ size: 200 });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
