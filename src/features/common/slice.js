import { createSlice } from "@reduxjs/toolkit";
const sliceName = "common";
const commonState = {
  theme: "light",
  fontSizeSliderValue: 0.5,
  fontSize: 0,
};
const common = createSlice({
  name: sliceName,
  initialState: commonState,
  reducers: {
    updateTheme(state, { payload }) {
      state.theme = payload;
    },
    updateFontValues(state, { payload }) {
      const { fontSizeSlider, fontSizeValue } = payload;
      state.fontSizeSliderValue = fontSizeSlider;
      state.fontSize = fontSizeValue;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateTheme, updateFontValues } = common.actions;

export default common.reducer;
