import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getOutletList } from '../services/outletService';
import { RootState } from "."
import { IOutlet } from './interface';
import { number } from "yup/lib/locale";
import { Outlet } from "react-router-dom";

export interface IoutletList {
    isLoadingOutlet: boolean;
    outletList?:IOutlet[];
    selectedOutlet:string;
  }

  const initialState: IoutletList = { isLoadingOutlet: false , outletList:[], selectedOutlet:"E6DD7E4C-81E9-4DA0-CB3C-08D9ECC10534"};

  export const outletListSlice = createSlice({
    name: 'outletList',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          isLoadingoutlet: true,
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          ...action.payload,
          isLoadingoutlet: false,
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          isLoadingoutlet: false,
        };
      },


      selectOutlet: (state, action: PayloadAction<string>) => {
          return{
              ...state,
            selectedOutlet:action.payload,
          }
      
      }
    },
  });
  
  export const fetchoutlets = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const outletList = await getOutletList();
      
      dispatch(success({outletList : outletList.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error, selectOutlet } = outletListSlice.actions;
  export const selectoutletLists = (state: RootState) => state.outlet;
  export const outletListReducer = outletListSlice.reducer;