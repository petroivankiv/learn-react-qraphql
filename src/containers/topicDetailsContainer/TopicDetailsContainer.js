import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import DescriptionIcon from '@material-ui/icons/Description';
import GradeIcon from '@material-ui/icons/Grade';
import SubtitlesIcon from '@material-ui/icons/Subtitles';

import SectionHeader from '../../components/SectionHeader';

import { GET_TOPIC } from './query';

function getIconByKey(key) {
  switch (key) {
    case 'Name':
      return <SubtitlesIcon color="primary" />;
    case 'Description':
      return <DescriptionIcon color="secondary" />;
    case 'Rate':
      return <GradeIcon style={{ color: 'green' }} />;
    default:
      return <SubtitlesIcon />;
  }
}

function getElement(key, value) {
  return (
    <ListItem key={key}>
      <ListItemIcon>{getIconByKey(key)}</ListItemIcon>
      <ListItemText primary={value} secondary={key} />
    </ListItem>
  );
}

export default function TopicDetailsPage() {
  const history = useHistory();
  const { topicId } = useParams();
  const { loading, data } = useQuery(GET_TOPIC, {
    variables: {
      id: topicId,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    history.goBack();
  };

  const topic = data ? data.topic : {};

  return (
    <>
      <SectionHeader onClickHandler={goBack} title="Topic Details" buttonTitle="Back" />

      <Grid item xs={12} md={6}>
        <div>
          <List>
            {getElement('Name', topic.name)}
            {getElement('Description', topic.description)}
            {getElement('Rate', topic.rate)}
          </List>
        </div>
      </Grid>
    </>
  );
}
