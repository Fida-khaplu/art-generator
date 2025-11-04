import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneratedImage {
  id?: string;
  name?: string;
  img: string;
}

interface GeneratedImageState {
  image: GeneratedImage | null;
  loading: boolean;
}

const initialState: GeneratedImageState = {
  image: null,
  loading: false,
};

const generateImageSlice = createSlice({
  name: 'generatedImage',
  initialState,
  reducers: {
    // Store generated image object
    setGeneratedImage: (state, action: PayloadAction<GeneratedImage>) => {
      state.image = action.payload;
    },
    // Clear generated image
    clearGeneratedImage: (state) => {
      state.image = null;
    },
    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setGeneratedImage, clearGeneratedImage, setLoading } = generateImageSlice.actions;
export default generateImageSlice.reducer;
