import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder } from "../../utils/redux";
import { $axios } from "../../utils/api";

export const fetchCamsSettings = createAsyncThunk(
  'settings/cams',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`/settings/cctv`)

      return data;
    } catch (e) {
      const { message } = e.response.data;
      return rejectWithValue(message || e.message);
    }
  }
);

const initialState = {
  cctv: null,
  status: null,
  error: null
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(fetchCamsSettings, (state, { payload }) => {
      state.cctv = payload
    })
  }
})
