import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { HYDRATE } from "next-redux-wrapper";

export const isServer = () => typeof window === 'undefined';
const parseCookie = (str) =>
  str
    ?.split(';')
    ?.map((v) => v.split('='))
    ?.reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333/', // <- ovde treba provera u zavisnosti da li je na serveru ili ne, da bude drugaciji URL, ali to tek kasnije kada napravim backend
  prepareHeaders: (headers, api) => {
    const accessToken = isServer()
      ? parseCookie(api?.extra?.ctx?.req?.headers?.cookie)?.accessToken ?? ''
      : Cookies.get('accessToken');

    headers.set('Authorization', `Bearer ${accessToken}`);
    headers.set('X-Requested-With', 'XMLHttpRequest');
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  },
});

export default createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const resolvedArgs = { ...args };

    const result = await baseQuery(resolvedArgs, api, extraOptions);
    return result;
  },
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  keepUnusedFor: 1000,
  endpoints: () => ({}),
  tagTypes: [],
});