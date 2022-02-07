import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import Transactions from "../containers/Transactions/transactions";
import { getTransactionList } from '../services/transactionService';
import { RootState } from "."
import { ITransaction } from './interface';

export interface ITransactionList {
    isLoadingTransaction: boolean;
    transactionList?: ITransaction[];
  }

  const initialState: ITransactionList = { isLoadingTransaction: false , transactionList:[]};

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
      dispatch(success({transactionList : transactionList}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = transactionListSlice.actions;
  export const selectTransactionLists = (state: RootState) => state.transaction;
  export const transactionListReducer = transactionListSlice.reducer;