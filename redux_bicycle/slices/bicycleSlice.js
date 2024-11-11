// slices/bicycleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch bicycle data
export const fetchBicycles = createAsyncThunk(
  'bicycles/fetchBicycles',
  async (category = '') => {
    const response = await axios.get(`https://6710657ba85f4164ef2dd6db.mockapi.io/bicycle${category ? `?category=${category}` : ''}`);
    return response.data;
  }
);

const bicycleSlice = createSlice({
  name: 'bicycle',
  initialState: {
    items: [],
    selectedCategory: '',
    loading: false,
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBicycles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBicycles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory } = bicycleSlice.actions;
export default bicycleSlice.reducer;
