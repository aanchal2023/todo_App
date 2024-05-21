import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState ={
    todo:[]
}
const todolist = createSlice({
    name :'todo',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.todo.push(action.payload)
        }
    }
})

export const{addTodos} = todolist.actions;

const store =configureStore({
    reducer:todolist.reducer
})
export default store;