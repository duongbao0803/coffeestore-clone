import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  status: false,
  message: "",
  updateStatus: false,
  changePasswordStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.status = payload.status;
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
    },
    deleteUserSuccess: (state, { payload }) => {
      state.user = {};
    },
    updateUserPending: (state) => {
      state.isLoading = true;
    },
    updateUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.updateStatus =true;
    },
    updateUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.updateStatus = false;
    },
    deleteUserSuccess: (state, { payload }) => {
      state.user = {};
    },
    changePassWordUserPending: (state) => {
      state.isLoading = true;
    },
    changePassWordUserSuccess: (state, { payload }) => {
      console.log(payload.status);
      state.isLoading = false;
      state.changePasswordStatus = true;
    },
    changePassWordUserFail: (state, { payload }) => {
      console.log(payload.status);
      state.isLoading = false;
      state.changePasswordStatus = false;
    },
  },
});

export const {
  getUserPending,
  getUserSuccess,
  getUserFail,
  updateUserPending,
  updateUserSuccess,
  updateUserFail,
  changePassWordUserPending,
  changePassWordUserSuccess,
  changePassWordUserFail,
  deleteUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
