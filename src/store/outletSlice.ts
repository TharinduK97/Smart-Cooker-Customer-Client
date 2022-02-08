import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getOutletList } from '../services/outletService';
import { RootState } from "."
import { IOutlet } from './interface';
import { number } from "yup/lib/locale";

export interface IoutletList {
    isLoadingOutlet: boolean;
    outletList?: IOutlet[];
    selectedOutlet:number;
  }

  const initialState: IoutletList = { isLoadingOutlet: false , outletList:[], selectedOutlet:0};

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


      selectOutlet: (state, action: PayloadAction<number>) => {
       state.selectedOutlet=action.payload;
      }
    },
  });
  
  export const fetchoutlets = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const outletList = await getOutletList();
      dispatch(success({outletList : outletList}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error, selectOutlet } = outletListSlice.actions;
  export const selectoutletLists = (state: RootState) => state.outlet;
  export const outletListReducer = outletListSlice.reducer;