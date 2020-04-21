import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopicDetailsPage from './TopicDetailsPage';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams() {
    return { topicId: 'topicId' };
  },
}));

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TopicDetailsPage />);

    const title = wrapper.find('h2').getElement();
    expect(title.props.children[0]).toBe('Topic Details - ');
    expect(title.props.children[1]).toBe('topicId');

    expect(wrapper.find(Grid).getElement()).toBeTruthy();
    expect(wrapper.find(List).getElement()).toBeTruthy();
    expect(wrapper.find(ListItem).getElements()).toBeTruthy();
  });
});
