import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import config from '@/config';

const api = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add response interceptor to handle HTML responses
api.interceptors.response.use(response => {
  // Check if response is HTML
  if (typeof response.data === 'string' && response.data.startsWith('<!DOCTYPE html>')) {
    throw new Error('API returned HTML instead of JSON. Check baseURL and proxy settings.');
  }
  return response;
}, error => {
  return Promise.reject(error);
});

// Request interceptor for auth token
api.interceptors.request.use(config => {
  const authStore = useAuthStore();
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  response => response,
  async error => {
    const authStore = useAuthStore();

    if (error.response?.status === 401) {
      // Unauthorized - token expired or invalid
      console.error('Session expired - logging out');
      await authStore.logout();
      window.location.href = '/login';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api;
