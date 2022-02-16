import { get } from './apiService';

export const getOutletList = async function () {
    return await get(`Outlet/GetAll`);
  }