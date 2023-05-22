import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Survey } from "../type";

interface ISurveyState {
  survey: Survey | null;
}

const initialState: ISurveyState = {
  survey: null,
};

const surveysSlice = createSlice({
  name: "surveys",
  reducers: {
    surveyState: (state, action: PayloadAction<Survey>) => {},
  },
  initialState: initialState,
});

export default surveysSlice.reducer;

export const { surveyState } = surveysSlice.actions;
