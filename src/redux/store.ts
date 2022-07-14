import { configureStore } from "@reduxjs/toolkit";
import { loremIpsumSlice } from "./";

const store = configureStore({
  reducer: {
    [loremIpsumSlice.reducerPath]: loremIpsumSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loremIpsumSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
