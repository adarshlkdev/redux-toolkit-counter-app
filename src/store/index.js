import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";


const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export const privacyActions = privacySlice.actions;

export default counterStore;
