import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { signIn } from '../../actions';

const Login = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid 
        container
        className={classes.grid}
      >
        <Grid item>
          <div>
            <Typography
              className={classes.title}
              variant="h2"
            >
              App Login
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              className={classes.subtitle}
            >
              Login with social media
            </Typography>
            <Grid 
              container 
              className={classes.socialButtons}
            >
              <Grid
                item
                className={classes.socialButton}
              >
                <Button
                  fullWidth
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => props.signIn('Facebook')}
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid
                item
                className={classes.socialButton}
              >
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={() => props.signIn()}
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  grid: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  socialButtons: {
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  },
  socialButton: {
    marginTop: theme.spacing(2),
  },
}));

export default connect(undefined, { signIn })(Login);
