import { Map as map, fromJS } from 'immutable';
import { Reducer } from 'redux';
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";


// Actions
const SEARCH_BOOKS = 'SEARCH_BOOKS';
const initialState = fromJS({
    books:[]
});


// Reducer

export default function reducer (state=initialState, action) {
    switch(action.type) {
        case SEARCH_BOOKS:
            return state.set('search', action.payload.query.toLowerCase());
        default:
            return state;
    }
};

// Action Creators
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
  }

// function that makes the api request and returns a Promise for response
function fetchDog() {
    return axios({
      method: "get",
      url: "https://api.tvmaze.com/search/shows?q=action"
    });
  }
  
  // worker saga: makes the api call when watcher saga sees the action
function* workerSaga(params) {
    try {
      const response = yield call(fetchDog);
      const books = response.data;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "API_CALL_SUCCESS", books });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
  }
  