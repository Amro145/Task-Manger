import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "./slices/getAllTasksSlice"
export const store = configureStore({
    reducer: {
        taskData: taskReducer
    },
    devTools: true
})