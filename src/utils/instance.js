import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rtk-goal.onrender.com/api',
});

export default instance;
