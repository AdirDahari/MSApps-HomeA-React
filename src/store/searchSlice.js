import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    per_page: 9,
    page: 1,
    q: "sports",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.q = action.payload;
            state.page = 1;
        },
        increasePage(state) {
            state.page += 1;
        },
        decreasePage(state) {
            state.page -= 1;
        }
    },
});

export const searchAction = searchSlice.actions;

export default searchSlice.reducer;
