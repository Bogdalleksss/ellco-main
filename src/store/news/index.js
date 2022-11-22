import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder, setItem, setSuccess } from "../../utils/redux";
import AsyncThunkService from "../../services/AsyncThinkService";

const api = new AsyncThunkService('/news', 'news');

export const newsFetch = api.fetchAll();
export const newsFetchOne = api.fetchOne();
export const newsSearch = api.search();

const initialState = {
  items: [],
  item: null,
  status: null,
  error: null
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(newsFetch, (state, { payload }) => {
      setSuccess(state);
      state.items = payload.map(news => ({ type: 'NEWS', ...news, }));
    })
    extraReducerBuild.addCases(newsFetchOne, setItem)
  }
})
