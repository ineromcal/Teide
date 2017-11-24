import axios from 'axios';
// var appid = '1ac9cf723278b5a6ab87a42099874a26f402dad9180052093299f05fb1a48fa5';
export const unsplahsApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  // timeout: 1000,
  headers: {'Authorization': 'Client-ID 1ac9cf723278b5a6ab87a42099874a26f402dad9180052093299f05fb1a48fa5'}
});
