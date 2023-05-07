import { combineReducers } from 'redux';
import postSlice from './postSlice';
import commentSlice from './commentSlice';

const rootReducer = combineReducers({
  posts: postSlice,
  comments:commentSlice
  // visibilityFilter: visibilityFilterReducer
});

export default rootReducer;
