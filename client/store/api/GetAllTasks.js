import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getAllTasks = createAsyncThunk("task/getAllTasks", async () => {
    const res = await axios.get("http://localhost:3002/task")
    return res.data
})