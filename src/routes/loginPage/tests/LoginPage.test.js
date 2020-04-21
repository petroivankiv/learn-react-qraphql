import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../LoginPage';

import TextInput from '../../../components/TextInput';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const props = {
      email: 'email',
      doLogin: jest.fn(),
      cancelLogin: jest.fn(),
    };

    const wrapper = shallow(<LoginPage {...props} />);

    expect(wrapper.find(TextInput).getElement()).toBeTruthy();
    expect(wrapper.find('.heading').getElement()).toBeTruthy();
    expect(wrapper.find('.button').getElements()).toBeTruthy();
  });

  it('should handle change of input', () => {
    const props = {
      email: 'email',
      doLogin: jest.fn(),
      cancelLogin: jest.fn(),
    };

    const wrapper = shallow(<LoginPage {...props} />);

    const input = wrapper.find(TextInput);
    input.simulate('changeInput', 'value');
    expect(wrapper.state().value).toBe('value');
  });

  it('should not login when email is invalid', () => {
    const props = {
      email: 'email@email.ua',
      doLogin: jest.fn(),
      cancelLogin: jest.fn(),
    };

    const wrapper = shallow(<LoginPage {...props} />);

    const login = wrapper.find('.button').at(1);
    login.simulate('click');

    expect(props.doLogin).not.toHaveBeenCalled();
  });

  it('should login wiht valid email', () => {
    const props = {
      email: 'email@email.ua',
      doLogin: jest.fn(),
      cancelLogin: jest.fn(),
    };

    const wrapper = shallow(<LoginPage {...props} />);

    // set valid email
    const input = wrapper.find(TextInput);
    input.simulate('changeInput', 'email@valid.ua');

    const login = wrapper.find('.button').at(1);
    login.simulate('click');

    expect(props.doLogin).toHaveBeenCalled();
  });

  it('should handle cancel click', () => {
    const props = {
      email: 'email',
      doLogin: jest.fn(),
      cancelLogin: jest.fn(),
    };

    const wrapper = shallow(<LoginPage {...props} />);

    const cancel = wrapper.find('.button').at(0);
    cancel.simulate('click');

    expect(props.cancelLogin).toHaveBeenCalled();
  });
});
