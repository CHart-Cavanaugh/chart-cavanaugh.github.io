import { createSlice } from "@reduxjs/toolkit";
import ArtProject1 from './../../images/artProject1.png'
import ArtProject2 from './../../images/artProject2.png'
import ArtProject3 from './../../images/artProject3.png'
import ArtProject4 from './../../images/artProject4.png'
import ArtProject5 from './../../images/artProject5.png'
import ArtProject6 from './../../images/artProject6.png'
import ArtProject7 from './../../images/artProject7.png'
import ArtProject8 from './../../images/artProject8.png'
import ArtProject9 from './../../images/artProject9.png'
import ArtProject10 from './../../images/artProject10.png'
import ArtProject11 from './../../images/artProject11.png'
import ArtProject12 from './../../images/artProject12.png'
import ArtProject13 from './../../images/artProject13.png'
import ArtProject14 from './../../images/artProject14.png'
import ArtProject15 from './../../images/artProject15.png'
import ArtProject16 from './../../images/artProject16.png'
import ArtProject17 from './../../images/artProject17.png'
// import ArtProject18 from './../../images/artProject18.png'
import ArtProject19 from './../../images/artProject19.png'
import ArtProject20 from './../../images/artProject20.png'
import ArtProject21 from './../../images/artProject21.png'



const initialState = {
  value: [
    ArtProject1,
    ArtProject2,
    ArtProject3,
    ArtProject4,
    ArtProject5,
    ArtProject6,
    ArtProject7,
    ArtProject8,
    ArtProject9,
    ArtProject10,
    ArtProject11,
    ArtProject12,
    ArtProject13,
    ArtProject14,
    ArtProject15,
    ArtProject16,
    ArtProject17,
    // ArtProject18,
    ArtProject19,
    ArtProject20,
    ArtProject21,
  ]
}



export const artProjectsSlice = createSlice({

  name: "artProjects",
  initialState,
  reducers: {}

});



export default artProjectsSlice.reducer;