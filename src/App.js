import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';

//Components
import LoginPassword from './components/login-password';
import Signup from './components/signup';
import Desk from './components/desk';

//Routing + Authorization
import requireAuth from './components/auth/requireAuth';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import theme from './theme';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={LoginPassword} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/desk" component={requireAuth(Desk)} />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
