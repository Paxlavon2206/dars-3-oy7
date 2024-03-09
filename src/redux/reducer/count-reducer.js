import { createSlice } from "@reduxjs/toolkit";

const initialState = {
count: 0,
}

const countSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        plus: (state, action) =>{
            return {...state, count: state.count + 1}
        },
        minus: (state, action) => {
            return {...state, count: state.count - 1}
        }
    }
})
export default countSlice.reducer;
export const {plus,minus} = countSlice.actions