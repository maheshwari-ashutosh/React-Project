import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import counterReducer from './store/reducer/counter'
import resultReducer from './store/reducer/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = store => {
  return next => {
    return action => {
      setTimeout(() => {
        console.log(['Middleware'], action);
        console.log(store.getState());
        const res = next(action);
        console.log(store.getState());
        return res;
      }, 2000);
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
