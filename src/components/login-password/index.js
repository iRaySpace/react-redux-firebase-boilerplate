import './style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../../views/Login';
import { signIn } from '../../actions';

class Signup extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.facebookLogin = this.facebookLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push('/desk');
    }
  }

  facebookLogin() {
    this.props.signIn('Facebook');
  }

  googleLogin() {
    this.props.signIn();
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

export default connect(
  mapStateToProps,
  { signIn }
)(Signup);
