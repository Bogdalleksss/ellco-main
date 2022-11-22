import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder, setItem, setItems, setSuccess } from "../../utils/redux";
import AsyncThunkService from "../../services/AsyncThinkService";

const api = new AsyncThunkService('/promotions', 'promotions');

export const promotionsFetch = api.fetchAll();
export const promotionsFetchOne = api.fetchOne();

const initialState = {
  items: [],
  item: null,
  status: null,
  error: null
}

export const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(promotionsFetch, (state, { payload }) => {
      setSuccess(state);
      state.items = payload.map(news => ({ type: 'STOCK', ...news, }));
    })
    extraReducerBuild.addCases(promotionsFetchOne, setItem)
  }
})
