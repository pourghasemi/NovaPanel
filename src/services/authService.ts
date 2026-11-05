import api from '@/services/api';

import type {
  LoginRequest,
  LoginResponse,
} from '@/type/auth';

export const login = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    '/auth/login',
    credentials,
  );

  return response.data;
};