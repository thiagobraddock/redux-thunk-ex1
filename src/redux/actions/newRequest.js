import { ADD_TOPIC } from './types';

export const addTopic = (topic) => ({
    type: ADD_TOPIC,
    topic,
  });