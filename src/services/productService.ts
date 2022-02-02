import { get } from './apiService';
import { env_var } from '../config/env';

export const getProductList = async function () {
  return await get(`https://61fa979892093f0017ad9922.mockapi.io/product`);
};

export const getSingleProduct = async function (data:number) {
  return await get(`https://61fa979892093f0017ad9922.mockapi.io/product/${data}`);
};