import React from 'react';
import AddSafinSaving from '../addSavings/addSafinSaving';
import SafinSaving from '../AllSavings/safin';
import { Typography } from '@material-ui/core';

export default function safinSavings() {
  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        Safin
      </Typography>
      <br />
      <AddSafinSaving />
      <br />
      <br />
      <SafinSaving />
    </div>
  );
}
