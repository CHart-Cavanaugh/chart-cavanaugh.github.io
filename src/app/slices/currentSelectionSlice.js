import { createSlice } from "@reduxjs/toolkit";



const initialState = {

  value: 0,

};



export const currentSelectionSlice = createSlice({

  name: "currentSelection",
  initialState,
  reducers: {

    setSelection: (state, newSelection) => {

      state.value = newSelection.payload;

    }

  }

});

export const { setSelection } = currentSelectionSlice.actions

export default currentSelectionSlice.reducer;