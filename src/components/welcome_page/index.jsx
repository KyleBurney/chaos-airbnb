import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./welcome_page.css";

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                Welcome to Chaos AirBnB
            </div>
        );
    }
}

WelcomePage.propTypes = {
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
)(WelcomePage);