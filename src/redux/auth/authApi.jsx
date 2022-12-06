import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['user'],
  endpoints: builder => ({
    userGet: builder.query({
      query: () => `/users/current`,
      providesTags: ['user'],
    }),
    userLogin: builder.mutation({
      query: user => ({
        url: `/user/login`,
        method: 'POST',
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['user'],
    }),
    userSignup: builder.mutation({
      query: newUser => ({
        url: `/user/signup`,
        method: 'POST',
         body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      }),
      invalidatesTags: ['user'],
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: `/user/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useUserGetQuery,
  useUserLoginMutation,
  useUserSignupMutation,
  useUserLogoutMutation,
} = authApi;