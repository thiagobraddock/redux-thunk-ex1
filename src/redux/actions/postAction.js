import { GET_POST, GET_POSTS } from './types';

// get a post
export const getPost = (id) => {
  return {
    type: GET_POST,
    payload: id,
  };
};

// get all posts
export const getAllPosts = () => async (dispatch, getState) => {
  // faz a requisicao
  // console.log(getState());
  const result = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=2');
  const data = await result.json();
  dispatch({
    type: GET_POSTS,
    posts: data,
  });
};
