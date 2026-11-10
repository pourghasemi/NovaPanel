import api from '@/services/api';
import type { User } from '@/types/user';

export type CreateUserPayload = Pick<
  User,
  'email' | 'username' | 'password' | 'name' | 'phone'
>;

export type CreateUserResponse = Pick<User, 'id'>;

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const createUser = async (
  user: CreateUserPayload,
): Promise<CreateUserResponse> => {
  const response = await api.post<CreateUserResponse>('/users', user);
  return response.data;
};