import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "#features/state-management/redux/counterSlice";

export const STORE = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
