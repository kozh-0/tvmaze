import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './Redux/rootReducer';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, compose(
	applyMiddleware(thunk)
))


ReactDOM.render(
  	<React.StrictMode>
    	<Provider store={store}>
      		<App />
    	</Provider>
  	</React.StrictMode>,
 	document.getElementById('root')
);
