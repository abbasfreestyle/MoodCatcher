import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AddCommentScreen } from '..';

const requiredProps = {
  navigation: { navigate: jest.fn() },
  comment: 'Test comment',
  onUpdateComment: jest.fn()
};

const wrapper = shallow(<AddCommentScreen {...requiredProps} />);

describe('Screens > Add Comment', () => {
  describe('Snapshots', () => {
    test('should match', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
