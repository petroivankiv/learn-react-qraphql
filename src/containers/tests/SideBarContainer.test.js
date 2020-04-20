import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBarContainer from '../SideBarContainer';

configure({ adapter: new Adapter() });

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
