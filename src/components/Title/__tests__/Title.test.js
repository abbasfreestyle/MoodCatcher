import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from '..';

const requiredProps = {
  children: 'Test Title'
};

const wrapper = shallow(<Title {...requiredProps} />);

describe('Title.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
