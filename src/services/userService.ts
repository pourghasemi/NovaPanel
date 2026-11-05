import api from '@/services/api';
import type { User } from '@/types/user';

export type CreateUserPayload = {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const createUser = async (
  user: CreateUserPayload,
): Promise<User> => {
  const response = await api.post<User>('/users', user);
  return response.data;
};