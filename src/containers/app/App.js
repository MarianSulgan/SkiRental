import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import allActions from './../../actions/allActions';

class App extends Component {
    render() {
        return (
            <div>
                { this.props.children }
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
