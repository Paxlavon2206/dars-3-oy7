import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    count: 0,
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    
    reducers:{
        addTodo: (state, action) => {
            return {...state, todoList:[...state.todoList, action.payload]} 
        },
        deleteTodo: (state,action)=> {
            return {...state, todoList: state.todoList.filter((item)=> item.id !== action.payload.id)}
        }
        
    },
    
})

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;