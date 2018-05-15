import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LogIn from '../log_in';
import Messages from '../messages';
import Listings from '../listings';
import Reservations from '../reservations';
import * as uiActions from '../../actions/ui_actions';
import "./header.css";

class Header extends React.Component {
    renderMainPanelComponent(component) {
        this.props.uiActions.loadMainPanelComponent(component);
    }

    render() {
        return (
            <div>
                Search: <input className="searchbox" type="text" />
                <button onClick={() => this.renderMainPanelComponent(<LogIn/>)}>Log In</button>
                <button onClick={() => this.renderMainPanelComponent(<Messages/>)}>Messages</button>
                <button onClick={() => this.renderMainPanelComponent(<Listings/>)}>My Property Listings</button>
                <button onClick={() => this.renderMainPanelComponent(<Reservations/>)}>My Reservations</button>
            </div>
        );
    }
}

Header.propTypes = {
    uiActions: PropTypes.object
};

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);