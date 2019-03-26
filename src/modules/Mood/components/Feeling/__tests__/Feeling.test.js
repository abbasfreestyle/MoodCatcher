import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Feeling } from '..';

const requiredProps = {
  feeling: { id: 1, name: 'Relaxed' },
  selected: false,
  onAddFeeling: jest.fn(),
  onRemoveFeeling: jest.fn()
};

const wrapper = shallow(<Feeling {...requiredProps} />);

describe('Modules > Mood > Feeling.', () => {
  describe('Snapshots.', () => {
    afterEach(() => {
      wrapper.setProps(requiredProps);
    });

    test('should match with required props', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when selected is true', () => {
      wrapper.setProps({ selected: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
