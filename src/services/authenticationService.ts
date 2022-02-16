import { getAccessToken } from './localStorage';
import { loginpost } from './apiService';

export interface AuthPayload {
  username: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {

  return await loginpost(`Auth/CustomerLogin`, data);

};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};
