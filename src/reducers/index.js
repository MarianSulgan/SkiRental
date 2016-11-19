import { combineReducers } from 'redux';

// Reducers
import { routerReducer as routing } from 'react-router-redux';
import pageReducer from './common/pageReducer'


const reducer = combineReducers({
    routing,
    page: pageReducer
});

export default reducer;
