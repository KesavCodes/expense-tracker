import { configureStore, createSlice } from "@reduxjs/toolkit";
import { dummyData } from "./../dummy_data/expense_data";

const expenseSlice = createSlice({
  name: "expenseData",
  initialState: {
    expenseData: dummyData,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseData.push(action.payload);
    },
    editExpense: (state, action) => {
      state.expenseData = state.expenseData.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
    deleteExpense: (state, action) => {
      state.expenseData = state.expenseData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const expenseAction = expenseSlice.actions;

const store = configureStore({
  reducer: {
    expenses: expenseSlice.reducer,
  },
});

export default store;
