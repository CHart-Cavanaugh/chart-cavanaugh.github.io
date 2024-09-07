import { createSlice } from "@reduxjs/toolkit";
import { siteUrls } from "../../util/ProjectCollections/siteUrls";
import { siteThumbnails } from "../../util/ProjectThumbnails/siteThumbnails";
import { ProjectPreview } from "../../util/ProjectPreview/ProjectPreview";



const initialState = {};



initialState.value = ProjectPreview.getProjects(siteThumbnails, siteUrls);



export const websiteProjectsSlice = createSlice({

  name: "websiteProjects",
  initialState,
  reducers: {}

});



export default websiteProjectsSlice.reducer;