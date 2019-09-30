import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import PropTypes from "prop-types";

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
            <div className="centerForm">
                <button onClick={this.googleLogin} className="goButton-style">
                    Sign In with Google
                </button>
                <button onClick={this.facebookLogin} className="goButton-style">
                    Sign In with Facebook
                </button>

            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(Signup);