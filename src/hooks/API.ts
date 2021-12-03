import axios from 'axios';

export const API_BASE = axios.create({
  baseURL: 'https://api.shrtco.de/v2',
});
