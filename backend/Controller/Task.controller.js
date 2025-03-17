import Tasks from "../Model/Task.model.js";

export const GetAllTasks = async (req, res) => {
    try {
        const AllTask = await Tasks.find()
        return res.status(200).send({ message: "hello", AllTask })

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "error in server" })


    }
}
export const AddTask = async (req, res) => {
    try {
        const { name, description, complete } = req.body
        const newTask = new Tasks({ name, description, complete })
        await newTask.save()
        const AllTask = await Tasks.find()

        return res.status(201).json({ AllTask })
    } catch (error) {
        return res.status(500).json(error)

    }
}
export const updateTask = async (req, res) => {
    try {
        const { name, description, complete } = req.body
        const taskId = req.params.id
        const task = await Tasks.findById(taskId)
        if (task) {
            const updatedTask = await Tasks.findByIdAndUpdate(taskId, {
                name, description, complete
            }, { new: true })
            await updatedTask.save()
            console.log(taskId);
            const AllTask = await Tasks.find()

            return res.status(200).json({ AllTask })

        } else {
            return res.status(404).json({ message: "Task Not Found" })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error in update task" })

    }
}
export const DeleteTask = async (req, res) => {
    try {
        const taskId = req.params.id
        const task = await Tasks.findById({ _id: taskId })
        if (task) {
            await Tasks.findByIdAndDelete(taskId)
            console.log(taskId);
            const AllTask = await Tasks.find()
            return res.status(200).json({ message: "Deleted succufuly", AllTask })
        } else {
            return res.status(404).json({ message: "Task Not Found" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })

    }
}
export const DeleteAllTasks = async (req, res) => {
    try {
        await Tasks.deleteMany({})
        return res.status(200).json({ message: "delete All Tasks Succus" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error in Delete all Task" })

    }
}