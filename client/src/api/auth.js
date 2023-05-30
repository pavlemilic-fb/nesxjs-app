import api from '@/services/api';
import { createSelector } from '@reduxjs/toolkit';

export const authSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: `/users/me`,
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation } = authSlice;

const selectGetMeQueryResult = createSelector([(state) => state], (state) =>
  authSlice.endpoints.getMe.select(undefined)(state),
);

export const selecGetMeQueryIndicators = createSelector(
  [selectGetMeQueryResult],
  ({ isLoading, isError, isUninitialized, isSuccess }) => ({
    isLoading,
    isError,
    isUninitialized,
    isSuccess,
  }),
);

export const selectGetMeQueryResponse = createSelector(
  [selectGetMeQueryResult],
  (queryResult) => queryResult.data ?? null,
);