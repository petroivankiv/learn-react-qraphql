import axios from 'axios';
import { API_URL } from '../../config';

export function create(topic) {
  return axios.post(`${API_URL}/topics`, { topic });
}

export function getAll() {
  return axios.get(`${API_URL}/topics`).then((data) => {
    return data.data;
  });
}

export function remove(id) {
  return axios.delete(`${API_URL}/topics?id` + id);
}
