import { createSlice } from "@reduxjs/toolkit";
import { games } from "../../util/ProjectCollections/games";
import { gameThumbnails } from "../../util/ProjectThumbnails/gameThumbnails";
import { ProjectPreview } from "../../util/ProjectPreview/ProjectPreview";



const initialState = {};



initialState.value = ProjectPreview.getProjects(gameThumbnails, games);



export const gameProjectsSlice = createSlice({

  name: "gameProjects",
  initialState,
  reducers: {}

});



export default gameProjectsSlice.reducer;