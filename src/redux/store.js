import { configureStore } from '@reduxjs/toolkit'
import regionsReducer from './regionsSlice'
import themeReducer from './themeSlice'

export default configureStore({
  reducer: {
    regionsSlice: regionsReducer,
    themeSlice:themeReducer
  },
})