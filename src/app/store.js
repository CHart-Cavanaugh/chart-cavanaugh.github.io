import { configureStore } from "@reduxjs/toolkit";

import currentSelectionReducer from "./slices/currentSelectionSlice";
import artProjectsReducer from "./slices/artProjectsSlice";



export const store = configureStore({
  reducer: {

    currentSelection: currentSelectionReducer,

    artProjects: artProjectsReducer,

  }
})