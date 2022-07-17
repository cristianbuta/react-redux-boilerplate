import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IResponse {
  status: string
}

interface IRequest {
  data: any
}

export const defaultApi = createApi({
  reducerPath: 'defaultApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    defaultEndpoint: builder.query<IResponse, IRequest>({
      query: ({ data }) => ({
        url: 'default/route/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useDefaultEndpointQuery } = defaultApi
