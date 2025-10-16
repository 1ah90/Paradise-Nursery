import { configureStore } from '@reduxjs/toolkit'
import PlantReducer from './Commponents/appSlices/PlantSlice'

export const store = configureStore({
  reducer:{
    plant : PlantReducer
  }
})

