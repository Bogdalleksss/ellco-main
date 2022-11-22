import { createAsyncThunk } from '@reduxjs/toolkit';
import { $axios } from '@/utils/api';

export default class AsyncThunkService {
  route;
  type;

  constructor (route, type) {
    this.route = route;
    this.type = type;
  }

  fetchAll () {
    return createAsyncThunk(
      `${this.type}/fetch`,
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $axios.get(this.route);

          return data;
        } catch (e) {
          const { message } = e.response.data;
          return rejectWithValue(message || e.message);
        }
      }
    );
  }

  fetchOne () {
    return createAsyncThunk(
      `${this.type}/fetch/one`,
      async (id, { rejectWithValue }) => {
        try {
          const { data } = await $axios.get(`${this.route}/${id}`);

          return data;
        } catch (e) {
          const { message } = e.response.data;
          return rejectWithValue(message || e.message);
        }
      }
    );
  }

  search () {
    return createAsyncThunk(
      `${this.type}/search`,
      async (query, { rejectWithValue }) => {
        try {
          const { data } = await $axios.get(`${this.route}/search/${query}`);

          return data;
        } catch (e) {
          const { message } = e.response.data;
          return rejectWithValue(message || e.message);
        }
      }
    );
  }
}
