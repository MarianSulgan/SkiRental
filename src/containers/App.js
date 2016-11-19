import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { find } from 'lodash';

import Navbar from './../components/navbar/Navbar';

import allActions from './../actions/allActions';

class App extends Component {
    render() {
        const { page, children } = this.props;
        const activePage = find(page, p => p.active);

        return (
            <div>
                <Navbar text={activePage && activePage.title} />
                { children }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { page } = state;

    return {
        page
    };
};

const mapDispatchToProps = (dispatch) => {
    return { ...bindActionCreators(allActions, dispatch) };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
