import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';
import { Link } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation() {
    return { pathname: '/' };
  },
}));

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NotFoundPage />);

    const linkEl = wrapper.find(Link).getElement();
    expect(linkEl).toBeTruthy();
    expect(linkEl.props.to).toBe('/content/home');
    expect(linkEl.props.children).toBe('Go Home');
  });
});
