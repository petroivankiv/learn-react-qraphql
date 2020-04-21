import React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from './Welcome';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

describe('Welcome', () => {
  it('renders correctly', () => {
    const props = {
      email: 'email',
    };

    const wrapper = shallow(<Welcome {...props} />);

    expect(wrapper.find(Button).getElement()).toBeTruthy();
    expect(wrapper.find(Link).getElement()).toBeTruthy();
    expect(wrapper.find(Link).getElement().props.children).toBe('Go Home');
  });

  it('should be present Log In text', () => {
    const props = {
      email: '',
    };

    const wrapper = shallow(<Welcome {...props} />);

    expect(wrapper.find('h3').getElement()).toBeTruthy();
  });
});
