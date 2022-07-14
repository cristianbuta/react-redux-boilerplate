import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

type CustomErrorType = 'Lorem Ipsum Error'

interface ILoremIpsum {
  value: string
}

export const loremIpsumSlice = createApi({
  reducerPath: 'loremIpsum',
  baseQuery: fakeBaseQuery<CustomErrorType>(),
  endpoints: (builder) => ({
    loremIpsum: builder.query<ILoremIpsum, void>({
      queryFn() {
        return new Promise((resolve, reject) => {
          Math.random() <= 0.5
            ? resolve({ data: { value: 'lorem ipsum' } })
            : reject({ error: 'Lorem Ipsum Error' })
        })
      },
    }),
  }),
})

export const { useLoremIpsumQuery } = loremIpsumSlice
