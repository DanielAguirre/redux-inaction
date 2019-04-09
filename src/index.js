import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import {Map as map } from 'immutable';
import createSagaMiddleware from "redux-saga";

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { watcherSaga } from './reducers/book';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer,
    map(),  
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)

// run the saga
sagaMiddleware.run(watcherSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
