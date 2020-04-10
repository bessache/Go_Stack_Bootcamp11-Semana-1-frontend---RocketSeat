import axios from  'axios';
const api = axios.create({
  baseURL: 'http://loaclhost:3333'
});

export default api;