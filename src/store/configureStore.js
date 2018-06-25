import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filterReducer from '../reducers/filters';
import dealingReducers from '../reducers/dealingReducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore (
        combineReducers ({
            dealings: dealingReducers,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
);
    return store;
}