import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks } from "../api/GetAllTasks";
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
    }
})

export default getAllTasksSlice.reducer