import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from '../TextInput';

configure({ adapter: new Adapter() });

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
