
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    connexionStatus: false
};


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
