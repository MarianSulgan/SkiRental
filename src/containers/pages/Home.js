import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainBtn from './../../components/buttons/MainBtn';

import * as c from './../../constants/constants';
import allActions from './../../actions/allActions';

class Home extends Component {
    componentWillMount() {
        const { setPage } = this.props;

        setPage(c.PAGE_HOME);
    }

    render() {
        const { page } = this.props;

        return (
            <div className={'container-home'}>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            { page.map(p => {
                                return (
                                    <div>
                                        { !p.hidden &&
                                            <MainBtn title={p.title} url={p.url} />
                                        }
                                    </div>
                                );
                            }) }
                        </div>
                    </div>
                </div>
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
)(Home);
