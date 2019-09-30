import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { CurrencyDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Currency = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={3} xs={12}>
          <CurrencyDetails />
        </Grid>
        <Grid item md={9} xs={12}>
          <h1>Know</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Currency;
