import { get, post } from './apiService';

export const getTransactionList = async function () {
    return await get(`https://61fa979892093f0017ad9922.mockapi.io/transactions`);
  }

  export const settransaction = async function (data:any) {
    return await post(`https://61fa979892093f0017ad9922.mockapi.io/Orders`,data);
  }


