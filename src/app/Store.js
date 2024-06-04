import { configureStore } from '@reduxjs/toolkit'
import VegReducer from '../features/VegSlice'

export default configureStore({
  reducer: {
    vegCart : VegReducer
  }
})