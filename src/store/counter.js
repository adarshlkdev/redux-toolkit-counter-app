import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
      counterVal: 0,
    },
    reducers: {
      increment: (state) => {
        state.counterVal += 1;
      },
      decrement: (state) => {
        state.counterVal -= 1;
      },
      incrementByValue: (state, action) => {
        state.counterVal += Number(action.payload);
      },
      decrementByValue: (state, action) => {
        state.counterVal -= Number(action.payload);
      },
    },
  });

export const counterActions = counterSlice.actions;

export default counterSlice;



