import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./reservations.css";

class Reservations extends React.Component {
    render() {
        return (
            <div>
                My Reservations
            </div>
        );
    }
}

Reservations.propTypes = {
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
)(Reservations);