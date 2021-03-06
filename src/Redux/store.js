import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(...middleware)
));