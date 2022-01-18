import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import topicReducer from './topicReducer';

const rootReducer = combineReducers({
  postReducer,
  userReducer,
  topicReducer
});

export default rootReducer;
