import { GET_POSTS } from '../actions/types';

const initialState = {
  post: null,
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
