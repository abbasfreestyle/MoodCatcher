import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Column from '..';

const wrapper = shallow(<Column />);

describe('Grid > Column.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
