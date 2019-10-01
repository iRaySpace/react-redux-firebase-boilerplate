import './style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../../views/Login';

class Signup extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push('/desk');
    }
  }

  render() {
    return (
      <div className="root">
        <Login />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Signup);
