import { configureStore } from "@reduxjs/toolkit";

import currentSelectionReducer from "./slices/currentSelectionSlice";
import currentTabReducer from "./slices/currentTabSlice";

import artProjectsReducer from "./slices/artProjectsSlice";
import audioProjectsReducer from "./slices/audioProjectsSlice";
import websiteProjectsReducer from "./slices/websiteProjectsSlice";
import gameProjectsReducer from "./slices/gameProjectsSlice";



export const store = configureStore({

  reducer: {

    currentSelection: currentSelectionReducer,
    currentTab: currentTabReducer,

    artProjects: artProjectsReducer,
    audioProjects: audioProjectsReducer,
    websiteProjects: websiteProjectsReducer,
    gameProjects: gameProjectsReducer,

  }

})