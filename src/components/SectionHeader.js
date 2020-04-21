import React from 'react';
import Button from '@material-ui/core/Button';

export default function SectionHeader({ title, buttonTitle, onClickHandler }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <h2>{title}</h2>
      <Button onClick={onClickHandler} variant="contained" color="primary">
        {buttonTitle}
      </Button>
    </div>
  );
}
