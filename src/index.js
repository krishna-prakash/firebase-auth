import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './Reducers';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const store = createStore(rootReducer, {});

ReactDOM.render(
      <Provider store={store}>
            <Router history={history}>
                  <App />
            </Router>
      </Provider>,
      document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
