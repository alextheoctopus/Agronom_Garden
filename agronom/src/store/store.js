import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persons from "./features/persons";

const rootReducer = combineReducers({
    persons: persons,
});
export const store = configureStore({
    reducer: rootReducer,
});
