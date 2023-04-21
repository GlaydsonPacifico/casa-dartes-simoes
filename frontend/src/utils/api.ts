import axios from 'axios';

const api = axios.create({
  baseURL: 'https://atelie-backend.vercel.app/'
});

export default api;
