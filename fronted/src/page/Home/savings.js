import React from 'react';
import AddSaving from '../addSavings/addSaving';
import Saving from '../AllSavings/savings';
import { Typography } from '@material-ui/core';

export default function safinSavings() {
  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        Other Savings
      </Typography>
      <br />
      <AddSaving />
      <br />
      <br />
      <Saving />
    </div>
  );
}
