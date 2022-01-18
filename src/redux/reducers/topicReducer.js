import { ADD_TOPIC } from '../actions/types';

const initialState = {
  topic: {
    title: '',
    level: 1,
    thumbnail: '',
    projectFinished: false,
  },
};

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPIC:
      return {
        ...state,
        topic: action.topic,
      };

    default:
      return state;
  }
};

export default topicReducer;
