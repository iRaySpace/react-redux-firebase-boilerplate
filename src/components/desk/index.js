import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signOut } from "../../actions";

class Desk extends Component {
    static contextTypes = {
        router: PropTypes.object
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
                <button onClick={this.handleClick}>
                    Log-out
                </button>
            </div>
        );
    }
}

export default connect(undefined, { signOut })(Desk);
