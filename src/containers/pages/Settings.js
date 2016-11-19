import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as c from './../../constants/constants';
import allActions from './../../actions/allActions';

class Settings extends Component {
    componentWillMount() {
        const { setPage } = this.props;

        setPage(c.PAGE_SETTINGS);
    }

    render() {
        return (
            <div className="container">
                <h1>Settings!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return { ...bindActionCreators(allActions, dispatch) };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);
