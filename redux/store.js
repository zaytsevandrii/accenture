import { configureStore } from '@reduxjs/toolkit'
import openreducer from './slices/NavOpenSlice'

export const store = configureStore({
  reducer: {
    open:openreducer,
  },
})