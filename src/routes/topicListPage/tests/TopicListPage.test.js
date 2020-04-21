import React from 'react';
import { shallow } from 'enzyme';
import { TopicListPage } from '../TopicListPage';
import TopicsTable from '../../../components/TopicsTable';
import Layout from '../../../components/Layout';

import { Link } from 'react-router-dom';

describe('TopicListPage', () => {
  it('renders correctly', () => {
    const props = {
      match: {
        url: 'url',
      },
      topics: [],
      history: {
        push: jest.fn(),
      },
      requestTopics: jest.fn(),
      deleteTopic: jest.fn(),
    };

    const wrapper = shallow(<TopicListPage {...props} />);
    expect(wrapper.find(Layout).getElement()).toBeTruthy();
  });

  it('should handle request', () => {
    const props = {
      match: {
        url: 'url',
      },
      topics: [],
      history: {
        push: jest.fn(),
      },
      requestTopics: jest.fn(),
      deleteTopic: jest.fn(),
    };

    const wrapper = shallow(<TopicListPage {...props} />);
    wrapper.instance().componentDidMount();

    expect(props.requestTopics).toHaveBeenCalled();
  });

  it('should handle delete topic', () => {
    const props = {
      match: {
        url: 'url',
      },
      topics: [],
      history: {
        push: jest.fn(),
      },
      requestTopics: jest.fn(),
      deleteTopic: jest.fn(),
    };

    const wrapper = shallow(<TopicListPage {...props} />);
    const tableEl = wrapper.find(TopicsTable);
    tableEl.simulate('deleteTopic');

    expect(props.requestTopics).toHaveBeenCalled();
  });

  it('should handle view details', () => {
    const props = {
      match: {
        url: 'url',
        path: '/content',
      },
      topics: [],
      history: {
        push: jest.fn(),
      },
      requestTopics: jest.fn(),
      deleteTopic: jest.fn(),
    };

    const wrapper = shallow(<TopicListPage {...props} />);
    const tableEl = wrapper.find(TopicsTable);
    tableEl.simulate('viewDetails', 'id');

    expect(props.history.push).toHaveBeenCalledWith(props.match.path + '/view/id');
  });

  it('should handle view details', () => {
    const props = {
      match: {
        url: 'url',
        path: '/content',
      },
      topics: [],
      history: {
        push: jest.fn(),
      },
      requestTopics: jest.fn(),
      deleteTopic: jest.fn(),
    };

    const wrapper = shallow(<TopicListPage {...props} />);
    const tableEl = wrapper.find(TopicsTable);
    tableEl.simulate('addTopic');

    expect(props.history.push).toHaveBeenCalledWith(props.match.path + '/add');
  });
});
