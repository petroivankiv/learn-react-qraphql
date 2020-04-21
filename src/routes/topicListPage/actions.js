import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  DELETE_TOPIC,
  DELETE_TOPIC_SUCCEEDED,
  DELETE_TOPIC_FAILED,
  ADD_TOPIC_SUCCEEDED,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function addTopicSucceeded(topic) {
  return {
    type: ADD_TOPIC_SUCCEEDED,
    topic,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  };
}

export function deleteTopic(id) {
  return {
    type: DELETE_TOPIC,
    id,
  };
}

export function deleteTopicSucceeded(id) {
  return {
    type: DELETE_TOPIC_SUCCEEDED,
    id,
  };
}

export function deleteTopicFailed(message) {
  return {
    type: DELETE_TOPIC_FAILED,
    message,
  };
}
