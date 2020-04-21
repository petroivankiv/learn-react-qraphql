import React from 'react';
import { useHistory } from 'react-router-dom';

import SectionHeader from './SectionHeader';

export default function AddTopicForm() {
  const history = useHistory();

  const onCancel = () => {
    history.goBack();
  };

  return (
    <>
      <SectionHeader onClickHandler={onCancel} title="Add Topic" buttonTitle="Back" />
    </>
  );
}
