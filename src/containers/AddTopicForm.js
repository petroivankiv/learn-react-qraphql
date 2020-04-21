import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import SectionHeader from '../components/SectionHeader';
import TextInput from '../components/TextInput';

function AddTopicForm() {
  const [state, setState] = useState({
    name: '',
    description: '',
    rate: 0,
  });

  const history = useHistory();

  const onCancel = () => {
    history.goBack();
  };

  const changeName = (value) => {
    setState({ name: value });
  };

  const changeDesc = (value) => {
    setState({ description: value });
  };

  const changeRate = (value) => {
    setState({
      rate: value,
    });
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
          style={{ width: '100%' }}
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

      <Button style={{ marginTop: '20px' }} variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
        Save
      </Button>
    </>
  );
}

export default AddTopicForm;
