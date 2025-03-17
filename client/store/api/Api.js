import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getAllTasks = createAsyncThunk("task/getAllTasks", async () => {
    const res = await axios.get("http://localhost:3002/task")
    return res.data
})
export const deleteAllTasks = createAsyncThunk("task/deleteAllTasks", async () => {
    await axios.delete("http://localhost:3002/task")

})
export const deleteOneTask = createAsyncThunk("task/deleteOneTask", async (id) => {
    const res = await axios.delete(`http://localhost:3002/task/${id}`)
    return res.data

})
export const addTask = createAsyncThunk("task/addTask", async (data) => {
    const res = await axios.post("http://localhost:3002/task", data)
    return res.data
})
