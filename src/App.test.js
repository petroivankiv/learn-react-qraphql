import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Connect(WithStyles(HeaderContainer))').length).toBe(1);
    expect(wrapper.find('Connect(ContentContainer)').length).toBe(1);
  });
});
