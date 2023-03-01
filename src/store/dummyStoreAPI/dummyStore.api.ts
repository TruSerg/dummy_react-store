import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProduct, ServerResponse } from "../../services/products";

export const dummyStoreAPI = createApi({
  reducerPath: "dummyStore/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => ({
        url: `products`,
        params: {
          limit: 0,
        },
      }),
      transformResponse: (response: ServerResponse) => response.products,
    }),
    getProductDetails: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `products/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = dummyStoreAPI;
