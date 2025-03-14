import express from "express"
import { AddTask, DeleteAllTasks, DeleteTask, GetAllTasks, updateTask } from "../Controller/Task.controller.js"
const router = express.Router()

router.get("/task", GetAllTasks)
router.post("/task", AddTask)
router.delete("/task", DeleteAllTasks)
router.delete("/task/:id", DeleteTask)
router.put("/task/:id", updateTask)


export default router