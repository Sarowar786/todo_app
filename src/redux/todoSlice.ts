import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../type";

interface TodoState {
    todoList: Todo[]
}
const initialState: TodoState = {
    todoList: [],
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //for add todo
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todoList.push(action.payload)
        },
        //for delete todo
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todoList = state.todoList.filter((item) => item?._id !== action.payload)
        },
        // for remove todo 
        removeTodo: (state) => {
            state.todoList = []
        },

        // ✅ edit todo
    editTodo: (state, action: PayloadAction<Todo>) => {
            const index = state.todoList.findIndex(
                (item) => item._id === action.payload._id
            );
            if (index !== -1) {
                state.todoList[index] = {
                    ...state.todoList[index],
                    ...action.payload, // পুরনো ডেটার উপর নতুন ডেটা বসবে
                };
            }
        },
    }
})

export const { addTodo, deleteTodo, removeTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;