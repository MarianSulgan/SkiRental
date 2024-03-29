import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const initialState = {};

export default function configureStore() {
    let store;

    if (module.hot) {
        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(thunkMiddleware, logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    } else {
        store = createStore(rootReducer, initialState, compose(
            applyMiddleware(thunkMiddleware), f=>f
        ));
    }

    return store;
}
