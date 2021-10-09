import { configureStore } from '@reduxjs/toolkit'
import regionsReducer from './regionsSlice'

export default configureStore({
  reducer: {
    regionsSlice: regionsReducer,
  },
})