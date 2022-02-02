import { getAccessToken } from './localStorage';
import { env_var } from '../config/env';
import { loginpost } from './apiService';

export interface AuthPayload {
  username: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {

  return await loginpost(`Auth/Login`, data);

};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};
