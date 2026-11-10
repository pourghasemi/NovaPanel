
import axios from 'axios';

import authStorage from '@/storage/authStorage';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Request Interceptor
api.interceptors.request.use((config) => {
  const token = authStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      !error.config?.url?.includes('/auth/login')
    ) {
      authStorage.removeToken();

      window.dispatchEvent(new Event('auth:logout'));
    }

    return Promise.reject(error);
  },
);

export default api;
