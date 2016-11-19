import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const Navbar = (props) => {
    return (
        <nav className={'navbar navbar-default navbar-fixed-top'}>
            <div className={'container-fluid'}>
                <div className={'navbar-header'}>
                    <p className={'navbar-text navbar-right'}> { props.text } </p>
                    <div className={'btn-group'} role={'group'}>
                        <button type={'button'} className={'btn btn-default navbar-btn'}> Back </button>
                        <button type={'button'} className={'btn btn-default navbar-btn'} onClick={() => { props.router.push('/')}}> Home </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    text: PropTypes.string
}

export default withRouter(Navbar);
