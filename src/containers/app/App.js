import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import allActions from './../../actions/allActions';

class App extends Component {
    render() {
        return (
            <div>
                <h1 style={{ fontFamily: 'Comic Sans MS' }}>
                    <span style={{ color: 'red' }}>Skirent</span>
                    <span style={{ color: 'pink' }}>al App</span>
                </h1>

                <h2 style={{ fontFamily: 'Comic Sans MS' }}>
                    <span style={{ color: 'green' }}>This </span>
                    <span style={{ color: 'red' }}>is </span>
                    <span style={{ color: 'blue' }}>exactly </span>
                    <span style={{ color: 'yellow' }}>where </span>
                    <span style={{ color: 'brown' }}>the </span>
                    <span style={{ color: 'pink' }}>magic </span>
                    <span style={{ color: 'aqua' }}>happens.</span>
                </h2>
            </div>
        );
    }
}

App.contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return { ...bindActionCreators(allActions, dispatch) };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
