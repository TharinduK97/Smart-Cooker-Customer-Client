import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import Transactions from "../containers/Transactions/transactions";
import { getTransactionList, gettransactionProducts, settransaction } from '../services/transactionService';
import { RootState } from "."
import { ITransaction } from './interface';

export interface ITransactionList {
    isLoadingTransaction: boolean;
    transactionList?: [];
    Products?:[]
  }

  const initialState: ITransactionList = { isLoadingTransaction: false , transactionList:[], Products:[]};

  export const transactionListSlice = createSlice({
    name: 'transactionList',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          isLoadingTransaction: true,
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          ...action.payload,
          isLoadingTransaction: false,
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          isLoadingTransaction: false,
        };
      },
    },
  });
  
  export const fetchTransactions = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const transactionList = await getTransactionList();
     
      dispatch(success({transactionList : transactionList.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const fetchTransactionView = (data: any) => async (dispatch: any) => {
    console.log(data)
    dispatch(start());
    try {
      const transactionList = await gettransactionProducts(data);
      console.log(transactionList)
      dispatch(success({Products : transactionList.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const postTransaction = (data: any) => async (dispatch: any) => {
    dispatch(start());
 
    try {
      const authData = await settransaction(
        data
      );
      console.log(authData);
         return "sucess";
        
    } catch (err: any) {
      console.log(err);
      dispatch(error(err));
    }
  };

  export const { start, success, error } = transactionListSlice.actions;
  export const selectTransactionLists = (state: RootState) => state.transaction;
  export const transactionListReducer = transactionListSlice.reducer;