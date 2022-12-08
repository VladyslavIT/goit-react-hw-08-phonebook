import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com/';

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
      query: () => `users/current`,
      providesTags: ['user'],
    }),
    userLogin: builder.mutation({
      query: user => ({
        url: `users/login`,
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['user'],
    }),
    userSignup: builder.mutation({
      query: newUser => ({
        url: `users/signup`,
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
        url: `users/logout`,
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
