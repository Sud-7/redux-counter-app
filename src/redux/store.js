import { configureStore } from "@reduxjs/toolkit";
import incrementCounter from "./slice";

export const store = configureStore({
  reducer: {
    counterApp: incrementCounter,
  },
});
