import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

class Signup extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.facebookLogin = this.facebookLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/desk");
        }
    }

    facebookLogin() {
        this.props.signIn("Facebook");
    }

    googleLogin() {
        this.props.signIn();
    }

    render() {
        return (
            <div>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.googleLogin}
                >
                    Sign in with Google
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.facebookLogin}
                >
                    Sign in with Facebook
                </Button>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(Signup);