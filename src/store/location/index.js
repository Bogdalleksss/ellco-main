import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder } from "../../utils/redux";
import { $axios } from "../../utils/api";

export const searchLocation = createAsyncThunk(
  'location/search',
  async (q, { rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`/settlements/search/${q}`)

      return data;
    } catch (e) {
      const { message } = e.response.data;
      return rejectWithValue(message || e.message);
    }
  }
);

const initialState = {
  location: localStorage.location ? JSON.parse(localStorage.location) : {},
  locations: [],
  status: null,
  error: null
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, { payload }) {
      state.location.title = payload.title;
      state.location.id = payload._id;

      localStorage.location = JSON.stringify(state.location);
    }
  },
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(searchLocation, (state, action) => {
      state.locations = action.payload;
      state.status = 'success';
      state.error = null;
    });
  }
})

export const { setLocation } = locationSlice.actions;
