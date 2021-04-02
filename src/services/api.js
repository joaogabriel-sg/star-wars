import axios from 'axios';

export default axios;

export const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});
