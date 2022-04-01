import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
