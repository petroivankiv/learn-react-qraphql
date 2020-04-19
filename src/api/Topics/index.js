import axios from 'axios';
import { API_URL } from '../../config';
import { GET_TOPICS } from '../../routes/TopicListPage/query';
import { DELETE_TOPIC } from '../../routes/TopicListPage/mutation';

// REST Actions
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

// GraphQl Actions
export function getAllByGql() {
  return fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: GET_TOPICS,
    }),
  }).then((r) => r.json());
}

export function removeByGql(id) {
  return fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: DELETE_TOPIC,
      variables: {
        id,
      },
    }),
  }).then((r) => r.json());
}
