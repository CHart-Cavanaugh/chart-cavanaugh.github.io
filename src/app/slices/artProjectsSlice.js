import { createSlice } from "@reduxjs/toolkit";
import { imageFiles } from "../../util/ProjectCollections/imageFiles";
import { artThumbnails } from "../../util/ProjectThumbnails/artThumbnails";
import { ProjectPreview } from "../../util/ProjectPreview/ProjectPreview";



const initialState = {};



initialState.value = ProjectPreview.getProjects(artThumbnails, imageFiles);



export const artProjectsSlice = createSlice({

  name: "artProjects",
  initialState,
  reducers: {}

});



export default artProjectsSlice.reducer;