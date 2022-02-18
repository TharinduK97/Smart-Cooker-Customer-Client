import { get } from "./apiService";


export const getProfile = async function () {
    return await get(`Customer`);
  };
  