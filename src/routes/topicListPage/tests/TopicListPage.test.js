import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TopicListPage } from '../TopicListPage';
import TopicsTable from '../../../components/TopicsTable';

import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

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

    expect(wrapper.find('h2').getElement().props.children).toBe('Topics');
    expect(wrapper.find(Link).getElement().props.children).toBe('Add Topic');
    expect(wrapper.find(Link).getElement().props.to).toBe(props.match.url + '/add');
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

    expect(props.history.push).toHaveBeenCalledWith('/content/topic/id');
  });
});
