import { get, post } from './apiService';

export const getTransactionList = async function () {
    return await get(`Order/GetOderByCustomer`);
  }

  export const settransaction = async function (data:any) {
    return await post(`Order`,data);
  }
  export const gettransactionProducts = async function (data:any) {

    return await get(`Order/GetOrderProducts/${data}`);
    
  }


