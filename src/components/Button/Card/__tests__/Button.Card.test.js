import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Card from '..';

const requiredProps = {
  children: 'Test Button',
  onPress: jest.fn()
};

const wrapper = shallow(<Card {...requiredProps} />);

describe('Button > Card.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
