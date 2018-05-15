import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./messages.css";

class Messages extends React.Component {
    render() {
        return (
            <div>
                My Messages
            </div>
        );
    }
}

Messages.propTypes = {
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
)(Messages);