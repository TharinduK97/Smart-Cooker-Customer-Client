import { get } from './apiService';
import { env_var } from '../config/env';

export const getProductList = async function () {
  return await get(`Product`);
};

export const getProductListByOutlet = async function (outlet_id:string) {
  
  return await get(`Product/Outlet/${outlet_id}`);
};

export const getSingleProduct = async function (OutletId:string,ProductId:string | undefined) {
 
  return await get(`Product/GetSingleProduct?ProductId=${ProductId}&&OutletId=${OutletId}`);
};