
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
    connexionStatus: false
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    
    changeConnexionStatus: (state, action) => {
      state.connexionStatus = action.payload;
    },
  },
});

export const { changeConnexionStatus } = authSlice.actions;

export const selectConnexionStatus = (state) => state.auth.connexionStatus;



export default authSlice.reducer;
