import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './loginSlice';
import { productListReducer } from './productSlice';
import { productViewReducer } from './productViewSlice';
import {transactionListReducer } from './transactionslice';

 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    productlist: productListReducer,
    product: productViewReducer,
    transaction: transactionListReducer
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;