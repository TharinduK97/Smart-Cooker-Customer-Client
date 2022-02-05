import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authenticationService';


export const setTokens = (authRes: any) => {
  console.log(authRes)
  let decoded: any = jwt_decode(authRes);

  localStorage.setItem('token', authRes);
  localStorage.setItem('user', decoded.nameid);
  
};

export const removeTokens = () => {
  
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  
  console.log("logout");
  
       
    


};

export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1);
export const getUser = () => localStorage.getItem('user');
  // export const setUser = (user: any) => localStorage.setItem('user', JSON.stringify(user));
  // export const getRefreshToken = () => localStorage.getItem('refresh_token');
