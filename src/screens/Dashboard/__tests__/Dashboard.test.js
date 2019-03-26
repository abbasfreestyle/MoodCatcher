import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DashboardScreen } from '..';

const requiredProps = {
  screenProps: {}
};

const defaultState = {
  loading: true,
  error: false,
  averageMood: 0,
  entries: 0,
  list: []
};

const wrapper = shallow(<DashboardScreen {...requiredProps} />);

describe('Screens > Dashboard', () => {
  describe('Snapshots', () => {
    afterEach(() => {
      wrapper.setState(defaultState);
    });

    test('should match with default state', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when loading is true', () => {
      wrapper.setState({ loading: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when error is true', () => {
      wrapper.setState({ loading: false, error: true });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when list is empty', () => {
      wrapper.setState({
        loading: false,
        error: false,
        list: [],
        entries: 0,
        averageMood: 0
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match when list is not empty', () => {
      const mockResponse = [
        {
          comment: 'Test comment',
          date: new Date(2019, 3, 25).valueOf(),
          feelings: {
            items: [{ id: 1, name: 'Relaxed' }, { id: 2, name: 'Happy' }]
          },
          mood: 6
        }
      ];
      wrapper.setState({
        loading: false,
        list: mockResponse,
        error: false,
        entries: mockResponse.length,
        averageMood: 75
      });
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
