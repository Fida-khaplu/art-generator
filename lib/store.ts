import { configureStore } from "@reduxjs/toolkit";
import inspirationReducer from "./feature/inspirationSlice";
import modelReducer from './feature/modelSlice'
import generateImageReducer from './feature/generateImageSlice'

export const store = configureStore({
  reducer: {
    inspiration: inspirationReducer,
    models:modelReducer,
    generatedImage:generateImageReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
