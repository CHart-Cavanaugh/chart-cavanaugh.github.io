import { createSlice } from "@reduxjs/toolkit";
import { gameUrls } from "../../util/ProjectCollections/gameUrls";
import { gameThumbnails } from "../../util/ProjectThumbnails/gameThumbnails";
import { ProjectPreview } from "../../util/ProjectPreview/ProjectPreview";



const initialState = {};



initialState.value = ProjectPreview.getProjects(gameThumbnails, gameUrls);



export const gameProjectsSlice = createSlice({

  name: "gameProjects",
  initialState,
  reducers: {}

});



export default gameProjectsSlice.reducer;