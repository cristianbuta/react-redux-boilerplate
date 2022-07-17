import { configureStore } from '@reduxjs/toolkit'
import { defaultSlice } from './slices'
import { defaultApi } from './api'

const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
    [defaultApi.reducerPath]: defaultApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(defaultApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
