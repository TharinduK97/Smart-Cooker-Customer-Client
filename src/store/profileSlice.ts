import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getOutletList } from '../services/outletService';
import { RootState } from "."
import { IOutlet, IProfile } from './interface';
import { number } from "yup/lib/locale";
import { Outlet } from "react-router-dom";
import { getProfile } from "../services/profileService";

export interface IProfileSlice {
    isLoadingTransactions: boolean;
    profile?: IProfile | undefined;
    
  }

  const initialState: IProfileSlice = { isLoadingTransactions: false , profile:{
    addresses:undefined,
    email:"",
    firstName:"",
    id:"",
    lastName:"",
    nic:""

  }};

  export const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          isLoadingTransactions: true,
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          ...action.payload,
          isLoadingTransactions: false,
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          isLoadingTransactions: false,
        };
      },

    },
  });
  
  export const fetchProfile = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const profile = await getProfile();
    
      dispatch(success({profile : profile.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = profileSlice.actions;
  export const selectProfile = (state: RootState) => state.profile;
  export const profileReducer = profileSlice.reducer;