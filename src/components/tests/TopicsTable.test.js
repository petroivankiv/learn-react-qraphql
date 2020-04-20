import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopicsTable from '../TopicsTable';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

configure({ adapter: new Adapter() });

describe('TopicsTable', () => {
  it('renders correctly', () => {
    const props = {
      topics: [
        { _id: '1', name: '1', description: '2', rate: '3' },
        { _id: '11', name: '11', description: '21', rate: '31' },
      ],
      deleteTopic: jest.fn(),
      viewDetails: jest.fn(),
    };

    const wrapper = shallow(<TopicsTable {...props} />);

    expect(wrapper.find(TableContainer).getElement()).toBeTruthy();
    expect(wrapper.find(TableRow).getElements().length).toBe(3); // plus header row
  });

  it('should handle viewDetails', () => {
    const props = {
      topics: [
        { _id: '1', name: '1', description: '2', rate: '3' },
        { _id: '11', name: '11', description: '21', rate: '31' },
      ],
      deleteTopic: jest.fn(),
      viewDetails: jest.fn(),
    };

    const wrapper = shallow(<TopicsTable {...props} />);

    const viewDetails = wrapper.find(IconButton).first();
    viewDetails.simulate('click');

    expect(props.viewDetails).toHaveBeenCalledWith(props.topics[0]._id);
  });

  it('should handle deleteTopic', () => {
    const props = {
      topics: [
        { _id: '1', name: '1', description: '2', rate: '3' },
        { _id: '11', name: '11', description: '21', rate: '31' },
      ],
      deleteTopic: jest.fn(),
      viewDetails: jest.fn(),
    };

    const wrapper = shallow(<TopicsTable {...props} />);

    const deleteTopic = wrapper.find(IconButton).at(1);
    deleteTopic.simulate('click');

    expect(props.deleteTopic).toHaveBeenCalledWith(props.topics[0]._id);
    expect(props.viewDetails).not.toHaveBeenCalled();
  });
});
