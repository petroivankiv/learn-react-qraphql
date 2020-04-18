import axios from 'axios';
import { API_URL } from '../../config';
import { GET_TOPICS } from '../../routes/TopicListPage/query';
import { DELETE_TOPIC } from '../../routes/TopicListPage/mutation';

export function create(topic) {
  return axios.post(`${API_URL}/topics`, { topic });
}

export function getAll() {
  return axios.get(`${API_URL}/topics`).then((data) => {
    return data.data;
  });
}

export function remove(id) {
  return axios.delete(`${API_URL}/topics` + '?id' + id);
}

export function getGqlAll() {
  return fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      GET_TOPICS,
    }),
  }).then((r) => r.json());
}

export function removeGql(id) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      DELETE_TOPIC,
      variables: {
        input: {
          id,
        },
      },
    }),
  }).then((r) => r.json());
}
