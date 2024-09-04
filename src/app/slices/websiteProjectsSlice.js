import { createSlice } from "@reduxjs/toolkit";
import { urls } from "../../util/ProjectCollections/urls";
import { websiteThumbnails } from "../../util/ProjectThumbnails/websiteThumbnails";
import { ProjectPreview } from "../../util/ProjectPreview/ProjectPreview";



const initialState = {};



initialState.value = ProjectPreview.getProjects(websiteThumbnails, urls);



export const websiteProjectsSlice = createSlice({

  name: "websiteProjects",
  initialState,
  reducers: {}

});



export default websiteProjectsSlice.reducer;