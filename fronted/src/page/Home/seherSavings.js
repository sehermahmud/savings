import React from 'react';
import AddSeherSavings from '../addSavings/addSeherSaving';
import SeherSavings from '../AllSavings/seher';
import { Typography } from '@material-ui/core';

export default function seherSavings() {
  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        Seher
      </Typography>
      <br />
      <AddSeherSavings />
      <br />
      <br />
      <SeherSavings />
    </div>
  );
}
