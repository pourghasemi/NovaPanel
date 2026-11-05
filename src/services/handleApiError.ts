import axios from 'axios';

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data?.message || 'Something went wrong';
    }

    if (error.request) {
      return 'Unable to connect to the server';
    }
  }

  return 'An unexpected error occurred';
};