import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Activity from '..';

const requiredProps = {
  item: {
    mood: 6,
    date: new Date(2019, 2, 26).valueOf(),
    feelings: {
      items: [{ id: 1, name: 'Relaxed' }, { id: 2, name: 'Happy' }]
    },
    comment: 'Test comment'
  }
};

const wrapper = shallow(<Activity {...requiredProps} />);

describe('Item > Activity.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
