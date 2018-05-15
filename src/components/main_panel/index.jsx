import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import "./main_panel.css";
import LogIn from '../log_in'
import Header from '../header'

class MainPanel extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <div className="grid-item header"> <Header /> </div>
                <div className="grid-item mainPanel"> {this.props.mainPanelComponent} </div>
                <div className="grid-item footer"> footer </div>
            </div>
        );
    }
}

MainPanel.propTypes = {
    mainPanelComponent: PropTypes.element
};

function mapStateToProps(state) {
    return {
        mainPanelComponent: state.ui.mainPanelComponent
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPanel);