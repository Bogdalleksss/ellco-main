import axios from 'axios';

export const $axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.dev-huriky-1.site/v1'
});
