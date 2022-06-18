import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_UNSPLASH_BASE_URL;
export const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const APP_URL = axios.create({
  baseURL: BASE_API_URL,
});

export default APP_URL;
