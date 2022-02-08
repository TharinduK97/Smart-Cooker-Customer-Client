import { get } from './apiService';
import { env_var } from '../config/env';

export const getProductList = async function () {
  return await get(`https://61fa979892093f0017ad9922.mockapi.io/product`);
};

export const getProductListByOutlet = async function (outlet_id:number) {
  return await get(`https://61fa979892093f0017ad9922.mockapi.io/product/${outlet_id.toString}`);
};

export const getSingleProduct = async function (data:string) {
  return await get(`https://61fa979892093f0017ad9922.mockapi.io/product/${data}`);
};