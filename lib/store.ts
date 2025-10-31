import { configureStore } from "@reduxjs/toolkit";
import inspirationReducer from "./feature/inspirationSlice";

export const store = configureStore({
  reducer: {
    inspiration: inspirationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
