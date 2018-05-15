import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./create_listing.css";

class CreateListing extends React.Component {

    render() {
        return (
            <div>
                Address: <input type="text" /><br />
                Amenities: <input type="text" /><br/>
                Check out instructions: <input type="text" /><br/>
                Description: <input type="text" /><br/>
                Maximum occupancy: <input type="text" /><br/>
                Minimum number of days: <input type="text" /><br/>
                Square footage: <input type="text" /><br/>
                Keywords: <input type="text" /><br/>
                Tags: <input type="text" /><br/>
                Image URLs: <input type="text" /><br/>
                <br/>
                <input type="submit" value="Submit" />
            </div>
        );
    }
}

CreateListing.propTypes = {
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
)(CreateListing);