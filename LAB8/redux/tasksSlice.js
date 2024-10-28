import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define API URL
const API_URL = 'https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks';

// Thunks for async actions
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
