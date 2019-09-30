import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { signOut } from '../../actions';

class Desk extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Desk
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(
  undefined,
  { signOut }
)(Desk);
