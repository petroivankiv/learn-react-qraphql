import React from 'react';
import { useParams } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import DescriptionIcon from '@material-ui/icons/Description';
import GradeIcon from '@material-ui/icons/Grade';
import SubtitlesIcon from '@material-ui/icons/Subtitles';

function getDetails() {
  return {
    name: 'NodeJs',
    description: 'Description',
    rate: 10,
  };
}

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
  const { topicId } = useParams();
  const details = getDetails();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Topic Details - {topicId}</h2>

      <Grid item xs={12} md={6}>
        <div>
          <List>
            {getElement('Name', details.name)}
            {getElement('Description', details.description)}
            {getElement('Rate', details.rate)}
          </List>
        </div>
      </Grid>
    </div>
  );
}
