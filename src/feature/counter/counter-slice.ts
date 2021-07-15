import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 6,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		inc(state) {
			state.value++;
		},
		dec(state) {
			state.value--;
		},
		incBy(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
});

export const { inc, incBy } = counterSlice.actions;
export default counterSlice.reducer;
