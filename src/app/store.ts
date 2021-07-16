import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counter-slice";
import termSlice from "../feature/counter/search-term-slice";
import { apiSlice } from "../feature/spotify/spotify-api-slice";
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		search: termSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
