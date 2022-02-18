import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { getOutletList } from '../services/outletService';
import { RootState } from "."
import { IOutlet } from './interface';
import { number } from "yup/lib/locale";
import { Outlet } from "react-router-dom";
import { getProfile } from "../services/profileService";

export interface IProfile {
    isLoadingOutlet: boolean;
    profile?: {};
    
  }

  const initialState: IProfile = { isLoadingOutlet: false , profile:{}};

  export const profileSlice = createSlice({
    name: 'Profile',
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

    },
  });
  
  export const fetchProfile = () => async (dispatch: any) => {
    dispatch(start());
    try {
      const profile = await getProfile();
      console.log(profile)
      dispatch(success({profile : profile.data}));
    } catch (err:any) {
      dispatch(error(err));
    }
  };

  export const { start, success, error } = profileSlice.actions;
  export const selectProfile = (state: RootState) => state.profile;
  export const profileReducer = profileSlice.reducer;