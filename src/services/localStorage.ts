import jwt_decode from "jwt-decode";



export const setTokens = (authRes: any) => {
   //console.log(authRes)

  localStorage.setItem('token', authRes);
};

export const removeTokens = () => {
  
  localStorage.removeItem('token');
  
  console.log("logout");
};

export const getAccessToken = () => localStorage.getItem('token');
export const getUser = () => localStorage.getItem('user');

