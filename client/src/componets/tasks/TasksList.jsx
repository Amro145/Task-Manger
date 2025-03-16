import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../../../store/api/GetAllTasks";

function TasksList() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.taskData);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);
  const [taskData, setTaskData] = useState([]);
  useEffect(() => {
    setTaskData(tasks.AllTask);
    console.log(taskData);
  }, [tasks]);
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="overflow-x-auto rounded-box border border-gray-700 bg-base-100 mt-10">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Complete</th>
              </tr>
            </thead>
            {tasks.AllTask !== undefined &&
              tasks.AllTask.length !== 0 &&
              taskData !== undefined &&
              taskData.length !== 0 &&
              taskData.map((task) => (
                <tbody key={task._id}>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-md border border-gray-700"
                      />
                    </th>
                    <td>{task.name || ""}</td>
                    <td>{task.description || ""}</td>
                    <td className="flex gap-1">
                      <button className="btn btn-outline btn-error">
                        Delete
                      </button>
                      <FaEdit size={35} className="cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </>
  );
}

export default TasksList;
