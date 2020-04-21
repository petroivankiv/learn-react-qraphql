import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import SectionHeader from '../../components/SectionHeader';
import TextInput from '../../components/TextInput';

import { ADD_TOPIC } from '../../routes/topicListPage/mutation';
import { addTopicSucceeded } from '../../routes/topicListPage/actions';

function AddTopicFormContainer() {
  const dispatch = useDispatch();
  const [addTopic] = useMutation(ADD_TOPIC, { onCompleted });
  const [state, setState] = useState({
    name: '',
    description: '',
    rate: 0,
  });

  function onCompleted(data) {
    dispatch(addTopicSucceeded(data.AddTopic));
  }

  const saveTopic = () => {
    const { name, description, rate } = state;

    if (!name || !description || !rate) {
      return;
    }

    addTopic({ variables: { input: { name, description, rate } } });
  };

  const history = useHistory();

  const onCancel = () => {
    history.goBack();
  };

  const changeName = (value) => {
    setState({ ...state, name: value });
  };

  const changeDesc = (value) => {
    setState({ ...state, description: value });
  };

  const changeRate = (value) => {
    setState({ ...state, rate: value });
  };

  return (
    <>
      <SectionHeader onClickHandler={onCancel} title="Add Topic" buttonTitle="Back" />

      <div>
        <Typography component="legend">Name</Typography>
        <TextInput placeholder="" value={state.name} onChangeInput={changeName} />

        <Typography style={{ marginTop: '20px' }} component="legend">
          Description
        </Typography>
        <textarea
          style={{ width: '100%', height: '150px' }}
          value={state.description}
          onChange={(event) => changeDesc(event.target.value)}
        />

        <Box style={{ marginTop: '20px' }} component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            size="large"
            max={10}
            name="simple-controlled"
            value={state.rate}
            onChange={(event, newValue) => {
              changeRate(newValue);
            }}
          />
        </Box>
      </div>

      <Button
        onClick={saveTopic}
        style={{ marginTop: '20px' }}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </>
  );
}

export default AddTopicFormContainer;
