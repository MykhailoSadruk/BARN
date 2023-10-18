import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const CHECK_USER_URL = '/check-user';
export const GET_USERS_URL = '/get-users';
export const COMPLETE_DATA_URL = '/complete-data';
export const AUTH_GOOGLE_URL = process.env.REACT_APP_BASE_URL+'/auth/google'

export default instance;
