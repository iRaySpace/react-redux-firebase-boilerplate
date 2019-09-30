import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { signOut } from '../../actions';
import Currency from '../../views/Currency';

class Desk extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Desk</Typography>
            <Button color="inherit" onClick={this.onLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Currency />
      </div>
    );
  }
}

export default connect(
  undefined,
  { signOut }
)(Desk);
