import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "#features/counter/redux/counterSlice";

export const STORE = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
