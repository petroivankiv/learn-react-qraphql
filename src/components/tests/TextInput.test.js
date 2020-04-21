import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../TextInput';

describe('TextInput', () => {
  const props = {
    errorText: 'Text',
    placeholder: 'Placeholder',
    className: 'className',
    onChangeInput: () => {},
  };

  it('renders correctly', () => {
    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper.getElements().length).toBe(1);
    expect(wrapper.state().value).toBe('');
    expect(wrapper.find('input').getElement().props.placeholder).toBe(props.placeholder);
  });

  it('should handle change event', () => {
    const wrapper = shallow(<TextInput {...props} />);

    const newValue = 'text';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: newValue } });
    expect(wrapper.find('input').getElement().props.value).toBe(newValue);
    expect(wrapper.state().value).toBe(newValue);
  });
});
