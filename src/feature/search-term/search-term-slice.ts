import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchTerm {
	term: string;
}

const initialState: SearchTerm = {
	term: "pink floyd",
};

const termSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setTerm(state, action: PayloadAction<string>) {
			state.term = action.payload;
		},
	},
});

export const { setTerm } = termSlice.actions;
export default termSlice.reducer;
