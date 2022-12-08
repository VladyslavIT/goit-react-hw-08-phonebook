import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import Notiflix from 'notiflix';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addMatcher(
        authApi.endpoints.userGet.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(authApi.endpoints.userGet.matchRejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        authApi.endpoints.userSignup.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          Notiflix.Notify.success(`Hello, ${payload.user.name}`);
        }
      )
      .addMatcher(authApi.endpoints.userSignup.matchRejected, () => {
        Notiflix.Notify.failure(
          'Something went wrong. Perhaps this user or email is already registered.'
        );
      })
      .addMatcher(
        authApi.endpoints.userLogin.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          Notiflix.Notify.success(`${payload.user.name}, Welcome back!`);
        }
      )
      .addMatcher(authApi.endpoints.userLogin.matchRejected, (state, _) => {
        Notiflix.Notify.failure(
          'Something went wrong. Perhaps you are not registered yet.'
        );
      })
      .addMatcher(authApi.endpoints.userLogout.matchFulfilled, (state, _) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
export const { setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
