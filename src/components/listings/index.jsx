import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Listing from '../listing';
import CreateListing from '../create_listing';
import * as uiActions from '../../actions/ui_actions';
import "./listings.css";

class Listings extends React.Component {
    renderMainPanelComponent(component) {
        this.props.uiActions.loadMainPanelComponent(component);
    }
    render() {
        return (
            <div>
                My Listings
                <br/>
                <br/>
                <Listing description="A one bedroom in Seattle" imageURL="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Fhotel-interior-room0416.jpg%3Fitok%3D5gENxAK1&w=1600&q=70"/>
                <Listing description="A two bedroom in Tacoma" imageURL="https://amp.businessinsider.com/images/5527f47fdd0895c44f8b459e-1334-750.jpg"/>
                <br/>
                <button onClick={() => this.renderMainPanelComponent(<CreateListing/>)}>Create Listing</button>
            </div>
        );
    }
}

Listings.propTypes = {
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
)(Listings);