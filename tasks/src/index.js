import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import * as serviceWorker from './serviceWorker';
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore(rootReducer, applyMiddleware(thunk))

setAuthorizationToken(localStorage.accessToken)

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
