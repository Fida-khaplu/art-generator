import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getGenerationModels } from '@/api/api';

interface Model {
  id: string;
  name: string;
  img: string;
}

interface ModelsState {
  models: Model[];
  loading: boolean;
  error: string | null;
}

const initialState: ModelsState = {
  models: [],
  loading: false,
  error: null,
};

// Async thunk to fetch models
export const fetchModels = createAsyncThunk('models/fetchModels', async () => {
  const response = await getGenerationModels();
  return response.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    img: item?.image ? `https://cognise.art/${item.image}` : '/fallback.png',
  }));
});

const modelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModels.fulfilled, (state, action: PayloadAction<Model[]>) => {
        state.models = action.payload;
        state.loading = false;
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch models';
      });
  },
});

export default modelsSlice.reducer;
