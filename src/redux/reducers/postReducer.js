import { GET_POSTS } from '../actions/types';

const initialState = {
  selectPost: null,
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case 'SELECT_POST':
      return {
        ...state,
        selectPost: action.selectPost,
      }
    default:
      return state;
  }
};

export default postReducer;
