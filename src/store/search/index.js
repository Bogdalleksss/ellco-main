import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder } from "../../utils/redux";
import { $axios } from "../../utils/api";

export const searchPages = createAsyncThunk(
  'search/pages',
  async (q, { rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`/search/${q}`)

      return data;
    } catch (e) {
      const { message } = e.response.data;
      return rejectWithValue(message || e.message);
    }
  }
);


const initialState = {
  results: [],
  status: null,
  error: null
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(searchPages, (state, action) => {
      state.results = action.payload;
      state.status = 'success';
      state.error = null;
    });
  }
})
