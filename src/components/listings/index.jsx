import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./listings.css";

class Listings extends React.Component {
    render() {
        return (
            <div>
                My Listings
                <br/>
                <br/>
                <button>Create a Listing</button>
            </div>
        );
    }
}

Listings.propTypes = {
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
)(Listings);