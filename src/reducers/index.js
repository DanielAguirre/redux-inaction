import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import {Map as map } from 'immutable'
import book from './book'

const rootReducer = combineReducers({
    book
});

export default rootReducer;