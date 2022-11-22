import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder } from "../../utils/redux";
import { $axios } from "../../utils/api";

export const sendOrder = createAsyncThunk(
  'order/send',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await $axios.post('/orders', body);

      return data;
    } catch (e) {
      const { message } = e.response.data;
      return rejectWithValue(message || e.message);
    }
  }
);

const initialState = {
  cctv: {
    term: '',
    type: 'ellco',
    camsCount: 0,
    camsForBuy: [],
  },
  status: null,
  error: null
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateCCTVField(state, { payload }) {
      state.cctv[payload.key] = payload.value;
    },
    clearSettingsCCTV(state) {
      state.cctv = {
        term: '',
        type: 'ellco',
        camsCount: 0,
        camsForBuy: [],
      }
    }
  },
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(sendOrder)
  }
})

export const { updateCCTVField, clearSettingsCCTV } = orderSlice.actions;
