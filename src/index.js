import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import App from './containers/app/App';
// import RestrictPage from './containers/misc/RestrictPage';
import NotFound from './containers/misc/NotFound';
import Home from './containers/home/Home';
// import DevTools from './components/DevTools';
// import { IS_DEV } from './config';

import './index.less';


const store = configureStore();

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="*" component={NotFound} />
                </Route>
                <Route path="/test" component={App} />
                <Route path="*" component={NotFound} />
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);
