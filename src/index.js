import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';

import App from './containers/App';
import pages from './containers/allContainers';

import './index.less';


const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={pages.Home} />
                    <Route path="/rent-new" component={pages.RentNew} />
                    <Route path="/rent-running" component={pages.RentRunning} />
                    <Route path="/rent-calendar" component={pages.RentCalendar} />
                    <Route path="/database" component={pages.Database} />
                    <Route path="/servis-new" component={pages.ServisNew} />
                    <Route path="/servis-running" component={pages.ServisRunning} />
                    <Route path="/servis-done" component={pages.ServisDone} />
                    <Route path="/sale" component={pages.Sale} />
                    <Route path="/settings" component={pages.Settings} />
                    <Route path="/import" component={pages.Import} />
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);
