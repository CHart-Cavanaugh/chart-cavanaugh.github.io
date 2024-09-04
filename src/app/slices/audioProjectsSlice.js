import { createSlice } from "@reduxjs/toolkit";
import { audioClips } from "../../util/ProjectCollections/audioClips";
import { audioThumbnails } from "../../util/ProjectThumbnails/audioThumbnails";
import { ProjectPreview } from "../../util/ProjectPreview/ProjectPreview";




const initialState = {};



initialState.value = ProjectPreview.getProjects(audioThumbnails, audioClips);



export const audioProjectsSlice = createSlice({

  name: "audioProjects",
  initialState,
  reducers: {}

});



export default audioProjectsSlice.reducer;