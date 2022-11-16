import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
}

export const openSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
    change: (state) => {
      state.open = !state.open
    },
  },
})

// Action creators are generated for each case reducer function
export const { change } = openSlice.actions

export default openSlice.reducer