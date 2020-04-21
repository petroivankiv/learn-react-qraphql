import React from 'react';
import { shallow } from 'enzyme';
import { HeaderContainer } from '../HeaderContainer';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

describe('HeaderContainer', () => {
  it('renders correctly', () => {
    const props = {
      classes: {},
      email: 'email',
      doLogout: jest.fn(),
    };

    const wrapper = shallow(<HeaderContainer {...props} />);

    expect(wrapper.find(AppBar).getElement()).toBeTruthy();
    expect(wrapper.find(Typography).getElement().props.children[1]).toBe(props.email);
  });

  it('should handle logout', () => {
    const props = {
      classes: {},
      email: 'email',
      doLogout: jest.fn(),
    };

    const wrapper = shallow(<HeaderContainer {...props} />);

    const button = wrapper.find(Button);
    button.simulate('click');

    expect(props.doLogout).toHaveBeenCalled();
  });
});
