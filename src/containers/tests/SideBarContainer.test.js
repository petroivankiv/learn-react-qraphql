import React from 'react';
import { shallow } from 'enzyme';
import SideBarContainer from '../SideBarContainer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch() {
    return { path: '/' };
  },
}));

describe('SideBarContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SideBarContainer />);

    expect(wrapper.getElements()).toBeTruthy();
  });
});
