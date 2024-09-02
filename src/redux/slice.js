import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counts: 0,
};

const Slice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counts += 1;
    },
    decrement: (state) => {
      state.counts -= 1;
    },
    incrementbyAmount: (state, action) => {
      state.counts += action.payload;
    },
    decrementbyAmount: (state, action) => {
      state.counts -= action.payload;
    },
    reset: (state) => {
      state.counts = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementbyAmount,
  reset,
  decrementbyAmount,
} = Slice.actions;
export default Slice.reducer;
