import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InspirationData {
  title: string;
  img: string;
}

interface InspirationState {
  selected: InspirationData | null;
}

const initialState: InspirationState = {
  selected: null,
};

const inspirationSlice = createSlice({
  name: "inspiration",
  initialState,
  reducers: {
    setSelectedInspiration: (state, action: PayloadAction<InspirationData>) => {
      state.selected = action.payload;
    },
    clearSelectedInspiration: (state) => {
      state.selected = null;
    },
  },
});

export const { setSelectedInspiration, clearSelectedInspiration } = inspirationSlice.actions;
export default inspirationSlice.reducer;
