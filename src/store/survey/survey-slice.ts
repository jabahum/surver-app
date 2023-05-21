import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Survey } from "../type";

const surveysSlice = createSlice({
  name: "surveys",
  reducers: {
    addSurveys: (state, action: PayloadAction<Survey>) => {},
    getSurveys: (state, action) => {},
    getSurvey: (state, action) => {},
    updateSurvey: (state, action: PayloadAction<Survey>) => {},
    deleteSurvey: (state, action) => {},
  },
  initialState: {
    surveysList: [],
    survey: {},
  },
});

export const surveysActions = surveysSlice.actions;

export default surveysSlice;
