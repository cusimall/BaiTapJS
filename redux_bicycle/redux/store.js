// store.js
import { configureStore } from '@reduxjs/toolkit';
import bicycleReducer from '../slices/bicycleSlice';

export const store = configureStore({
  reducer: {
    bicycle: bicycleReducer,
  },
});

export default store;
