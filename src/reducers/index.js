import { combineReducers } from 'redux';

// Reducers
import { routerReducer as routing } from 'react-router-redux';


const reducer = combineReducers({
    routing,
});

export default reducer;
