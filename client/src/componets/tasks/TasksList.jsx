import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllTasks,
  deleteOneTask,
  getAllTasks,
} from "../../../store/api/Api";

function TasksList() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.taskData);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);
  useEffect(() => {
    !loading && console.log(tasks.AllTask);
  }, [tasks, deleteAllTasks, deleteOneTask, loading]);
  return (
    <>
      {loading ? (
        <div>loading ...</div>
      ) : tasks.AllTask !== undefined && tasks.AllTask.length !== 0 ? (
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
              tasks.AllTask.map((task) => (
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
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => {
                          dispatch(deleteOneTask(task._id));
                          console.log(task._id);
                        }}
                      >
                        Delete
                      </button>
                      <FaEdit size={35} className="cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          <button onClick={() => dispatch(deleteAllTasks())}>delete All</button>
        </div>
      ) : (
        <div>no data</div>
      )}
    </>
  );
}

export default TasksList;
