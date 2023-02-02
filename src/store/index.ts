import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { MoviesStateType } from '../types';

// initial state for movieResults reducer
const intialState: MoviesStateType = {
  results: [],
  query: 'top_rated',
  page: 1,
};

// movieResults reducer
function movieResults(
  state = intialState,
  action: { type: string; data: { results: []; query: string } },
) {
  const { type, data } = action;
  switch (type) {
    case 'GET_MOVIES':
      return {
        ...state,
        // results: state.results.concat(data.results),
        results: data.results,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'CHANGE_QUERY':
      return {
        ...state,
        query: data,
      };
    default:
      return state;
  }
}

// combined reducers -more to be added later
const reducers = combineReducers({
  movieResults,
});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
