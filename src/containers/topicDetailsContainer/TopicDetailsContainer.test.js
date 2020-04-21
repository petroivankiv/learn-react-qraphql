import React from 'react';
import { shallow } from 'enzyme';
import TopicDetailsPage from './TopicDetailsContainer';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SectionHeader from '../../components/SectionHeader';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams() {
    return { topicId: 'topicId' };
  },
  useHistory() {
    return {
      history: {
        goBack: jest.fn(),
      },
    };
  },
}));

jest.mock('@apollo/react-hooks', () => ({
  // ...jest.requireActual('@apollo/react-hooks'), // use actual for all non-hook parts
  useQuery() {
    return {
      data: {
        topic: {},
      },
      loading: false,
    };
  },
}));

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TopicDetailsPage />);

    const title = wrapper.find(SectionHeader).getElement();
    expect(title).toBeTruthy();

    expect(wrapper.find(Grid).getElement()).toBeTruthy();
    expect(wrapper.find(List).getElement()).toBeTruthy();
    expect(wrapper.find(ListItem).getElements()).toBeTruthy();
  });
});
