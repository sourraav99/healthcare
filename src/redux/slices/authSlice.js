import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  uid: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userToken = action.payload.token;
      state.uid = action.payload.uid;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userToken = null;
      state.uid = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
