import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  value: 1
}



export const currentTabSlice = createSlice({

  name: "currentTab",
  initialState,
  reducers: {

    setTab: (state, newTab) => {

      state.value = newTab.payload;

    }

  }

});

export const { setTab } = currentTabSlice.actions

export default currentTabSlice.reducer;