import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './loginSlice';
import { productListReducer } from './productSlice';
import { productViewReducer } from './productViewSlice';
import {transactionListReducer } from './transactionSlice';
import { cartListReducer } from './cartSlice';
import { outletListReducer } from './outletSlice';
import { profileReducer } from './profileSlice';
 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    productlist: productListReducer,
    product: productViewReducer,
    transaction: transactionListReducer,
    cart: cartListReducer,
    outlet:outletListReducer,
    profile:profileReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;