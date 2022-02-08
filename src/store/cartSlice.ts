import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Transactions from "../containers/Transactions/transactions";
import { getTransactionList } from '../services/transactionService';
import { RootState } from "."
import { IProduct, ITransaction } from './interface';
import { IProducts } from "./productViewSlice";
import { IProductList } from "./productSlice";

export interface IcartList {
    isLoadingcart: boolean;
    cartList?: IProduct[];

}

const initialState: IcartList = {
    isLoadingcart: false, cartList: [
        {
            "product_name": "Rice Cooker",
            "price": 1000,
            "quantity": 10,
            "last_updated": "2022-1-8",
            "productDescription": "Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            "productImage": "https://www.jungle.lk/wp-content/uploads/2020/02/Abans-Electric-Rice-Cooker-with-Steamer-1.5L-%E2%80%93-AC15TR1.jpg",
            "product_code": 1
        },
    ]
};

export const cartListSlice = createSlice({
    name: 'cartList',
    initialState,
    reducers: {
        start: (state) => {
            return {
                ...state,
                isLoadingcart: true,
            };
        },
        success: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                ...action.payload,
                isLoadingcart: false,
            };
        },
        error: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                isLoadingcart: false,
            };
        },
        addToCart: (state, action: PayloadAction<IProduct>) => {

        
            console.log(action.payload)
            let inCart = state.cartList?.find((item) =>
                item.product_code === 1 ? true : false
            );
            console.log(inCart);
            // state.cartList?.push(action.payload);


            // console.log(action.payload);

            //   cartList?.push(action.payload)
            // return {
            //     ...state,
            //     cartList: cartList,

            // };
        },
    },
});
export const { addToCart } = cartListSlice.actions
export const { start, success, error } = cartListSlice.actions;
export const selectCartList = (state: RootState) => state.cart.cartList;
export const cartListReducer = cartListSlice.reducer;