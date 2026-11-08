import axios from 'axios';

export const handleApiError = (
  error: unknown,
  t: (key: string) => string,
): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data?.message || t('somethingWentWrong');
    }

    if (error.request) {
      return t('errors.networkError');
    }
  }

  return t('errors.unexpectedError');
};