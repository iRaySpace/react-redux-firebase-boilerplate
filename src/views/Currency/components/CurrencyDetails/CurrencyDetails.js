import React from 'react';
import {
  CardHeader,
  Card,
  Divider,
  CardActions,
  Button,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

const CurrencyDetails = props => {
  return (
    <Card>
      <CardHeader
        title="Currency Details"
        subheader="Your currency information"
      />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid item md={6}>
            <Typography gutterBottom variant="body2">
              Perlas
            </Typography>
            <Typography variant="h3">100</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography gutterBottom variant="body2">
              Tickets
            </Typography>
            <Typography variant="h3">100</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" variant="contained">
          Payout
        </Button>
      </CardActions>
    </Card>
  );
};

export default CurrencyDetails;
