import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from "./news";
import { locationSlice } from "./location";
import { promotionsSlice } from "./promotions";
import { tariffsSlice } from "./tariffs";
import { searchSlice } from "./search";
import { settingsSlice } from "./settings";
import { orderSlice } from "./order";

export const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    news: newsSlice.reducer,
    promotions: promotionsSlice.reducer,
    search: searchSlice.reducer,
    settings: settingsSlice.reducer,
    order: orderSlice.reducer,
    tariffs: tariffsSlice.reducer
  },
});
