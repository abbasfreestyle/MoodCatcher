import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loading from '..';

const wrapper = shallow(<Loading />);

describe('Loading.', () => {
  describe('Snapshots.', () => {
    afterEach(() => {
      wrapper.setProps(Loading.defaultProps);
    });

    test('should match default props', () => {
      expect(Loading.defaultProps).toMatchSnapshot();
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
