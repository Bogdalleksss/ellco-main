import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraReducerBuilder, setItems } from "../../utils/redux";
import { $axios } from "../../utils/api";

export const tariffsFetch = createAsyncThunk(
  'tariffs/fetch',
  async (settlementId, { rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`/tariffs/settlement/${settlementId}`);

      return data;
    } catch (e) {
      const { message } = e.response.data;
      return rejectWithValue(message || e.message);
    }
  }
);;

const initialState = {
  items: [],
  item: null,
  selectedTariffs: [],
  status: null,
  error: null
}

export const tariffsSlice = createSlice({
  name: 'tariffs',
  initialState,
  reducers: {
    selectTariff(state, { payload }) {
      const isSelected = state.selectedTariffs.includes(payload);

      if (!isSelected) state.selectedTariffs.push(payload);
    },
    removeTariff(state, { payload }) {
      state.selectedTariffs = state.selectedTariffs.filter(tariff => tariff !== payload);
    },
    clearSelectedTariffs(state) {
      state.selectedTariffs = [];
    }
  },
  extraReducers: (builder) => {
    const extraReducerBuild = new ExtraReducerBuilder(builder);

    extraReducerBuild.addCases(tariffsFetch, setItems);
  }
})

export const { selectTariff, removeTariff, clearSelectedTariffs } = tariffsSlice.actions;
