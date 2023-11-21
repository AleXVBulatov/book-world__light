import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ slug, id }) => `/categories/${slug}/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductQuery } = apiSlice;

export default apiSlice.reducer;
