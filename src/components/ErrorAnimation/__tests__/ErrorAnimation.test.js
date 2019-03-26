import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ErrorAnimation from '..';

const wrapper = shallow(<ErrorAnimation />);

describe('ErrorAnimation.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
