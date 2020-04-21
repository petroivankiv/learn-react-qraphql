import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../SideBar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

describe('SideBar', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
  };

  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SideBar {...props} />
      </MemoryRouter>
    );

    expect(wrapper.getElements().length).toBe(1);
    expect(wrapper.find(List).getElement()).toBeTruthy();
    expect(wrapper.find(ListItem).getElements().length).toBe(2);
  });

  it('should handle navigation', () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter>
        <SideBar history={history} />
      </MemoryRouter>
    );

    const homeLink = wrapper.find(ListItemText).first();
    const topicsLink = wrapper.find(ListItemText).last();

    homeLink.simulate('click');
    topicsLink.simulate('click');

    // console.log(history.push.mock);
    // expect(history.push).toHaveBeenCalled();
  });
});
