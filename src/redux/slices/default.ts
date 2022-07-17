import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  data: any
}

const initialState: IInitialState = { data: null }

export const defaultSlice = createSlice({
  name: 'default',
  initialState,
  reducers: {
    setData: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload
    },
  },
})

export const { setData } = defaultSlice.actions
