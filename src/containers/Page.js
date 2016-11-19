import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Database from './pages/Database';
import Import from './pages/Import';

import allActions from './../actions/allActions';

const PagesMap = {
    Database,
    Import
}

class Page extends Component {
    constructor(props) {
        super(props);

        this.getPage = this.getPage.bind(this);
    }

    componentWillMount() {
        console.log('dummy');
    }

    render() {
        return (
            React.createElement(PagesMap[data.name], { ...this.props })
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
)(Page);
