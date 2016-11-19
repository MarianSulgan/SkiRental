import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const MainBtn = (props) => {
    return (
        <div className={'main-button'} onClick={() => { props.router.push(props.url)}}>
            <p>
                <i className={`fa ${props.icon}`} />
                { props.title }
            </p>
        </div>
    );
}

MainBtn.propTypes = {

}

export default withRouter(MainBtn);
