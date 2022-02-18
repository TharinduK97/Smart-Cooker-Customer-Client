import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getProductList, getProductListByOutlet } from '../services/productService';
import { RootState } from "../store"
import { IProduct } from './interface';

export interface IProductList {
    isLoadingProducts: boolean;
    productList?: [];
  }

  const initialState: IProductList = { isLoadingProducts: false , productList:[]};

  export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          isLoadingProducts: true,
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          ...action.payload,
          isLoadingProducts: false,
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          isLoadingProducts: false,
        };
      },
    },
  });
  
  export const fetchProducts = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const productLists = await getProductList();
      dispatch(success({productList : productLists}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const fetchProductsByOutlet = (outlet_id:string) => async (dispatch: any) => {
    dispatch(start());
    try {
      const productLists = await getProductListByOutlet(outlet_id);
     // console.log(productLists.data[0].outletProducts)
      dispatch(success({productList : productLists.data[0].outletProducts}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = productListSlice.actions;
  export const selectProductLists = (state: RootState) => state.productlist;
  export const productListReducer = productListSlice.reducer;