import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Row from '..';

const wrapper = shallow(<Row />);

describe('Grid > Row.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
