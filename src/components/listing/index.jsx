import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./listing.css";

class Listing extends React.Component {

    render() {
        return (
            <div className="listing">
                <img src={this.props.imageURL} />
                <br/>
                <span>{this.props.description}</span>
            </div>
        );
    }
}

Listing.propTypes = {
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
)(Listing);