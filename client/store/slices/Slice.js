import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteAllTasks, deleteOneTask, getAllTasks } from "../api/Api";
const initialState = {
    tasks: [],
    loading: false,
    error: null
}
const getAllTasksSlice = createSlice({
    name: "tasks",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllTasks.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(getAllTasks.fulfilled, (state, action) => {
                state.loading = false,
                    state.tasks = action.payload
            })
            .addCase(getAllTasks.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
            .addCase(deleteAllTasks.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(deleteAllTasks.fulfilled, (state) => {
                state.loading = false,
                    state.tasks = []
            })
            .addCase(deleteAllTasks.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
            .addCase(deleteOneTask.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(deleteOneTask.fulfilled, (state, action) => {
                state.loading = false,
                    state.tasks = action.payload
            })
            .addCase(deleteOneTask.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
            .addCase(addTask.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.loading = false,
                    state.tasks = action.payload
            })
            .addCase(addTask.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
    }
})

export default getAllTasksSlice.reducer