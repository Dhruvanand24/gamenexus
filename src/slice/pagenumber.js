import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1
}

export const pagenumber = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, action) =>{
            state.page = state.page + action.payload
        }
    }

})
export const {changePage} = pagenumber.actions

export default pagenumber.reducer