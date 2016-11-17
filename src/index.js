import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';

import App from './containers/app/App';
import Home from './containers/home/Home';

import './index.less';


const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);
