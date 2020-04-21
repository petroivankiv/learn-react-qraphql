import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from '../SectionHeader';
import Button from '@material-ui/core/Button';

describe('SectionHeader', () => {
  it('renders correctly', () => {
    const props = {
      title: 'Title',
      buttonTitle: 'Button Title',
      onClickHandler: jest.fn(),
    };

    const wrapper = shallow(<SectionHeader {...props} />);

    const title = wrapper.find('h2').getElement();
    expect(title.props.children).toBe(props.title);
    expect(wrapper.find(Button).getElement().props.children).toBe(props.buttonTitle);
  });

  it('should handle click', () => {
    const props = {
      title: 'Title',
      buttonTitle: 'Button Title',
      onClickHandler: jest.fn(),
    };

    const wrapper = shallow(<SectionHeader {...props} />);

    const button = wrapper.find(Button);
    button.simulate('click');
    expect(props.onClickHandler).toHaveBeenCalled();
  });
});
