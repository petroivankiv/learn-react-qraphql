import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Welcome } from './Welcome';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

configure({ adapter: new Adapter() });

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
