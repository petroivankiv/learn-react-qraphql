import axios from 'axios';
import { API_URL } from '../../config';

export function login(email, password = '') {
  return axios.post(`${API_URL}/auth/login`, { email, password });
}
