import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./log_in.css";

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <span>Log In</span><br />
                Email: <input type="text" /><br />
                Password: <input type="text" /><br />
                <input type="submit" value="Submit" />
            </div>
        );
    }
}

LogIn.propTypes = {
};

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);