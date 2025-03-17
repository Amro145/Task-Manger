import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteAllTasks,
  deleteOneTask,
  getAllTasks,
  updateData,
} from "../../../store/api/Api";
import EditPage from "./EditPage";

function TasksList() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.taskData);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, updateData]);
  useEffect(() => {
    !loading && console.log(tasks.AllTask);
  }, [tasks, deleteAllTasks, deleteOneTask, loading]);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-full  items-center absolute top-0 left-1/2">
          <span className={`loading loading-spinner  w-10`} />
        </div>
      ) : tasks.AllTask !== undefined && tasks.AllTask.length !== 0 ? (
        <div className="  rounded-box border border-gray-700 bg-base-100 mt-10 py-5 flex flex-col justify-center items-center gap-4 ">
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
                <tbody key={task._id} className="text-xl ">
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
                      <Link to={`edit/${task._id}`}>
                        <FaEdit size={35} className="cursor-pointer" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>

          <button
            onClick={() => dispatch(deleteAllTasks())}
            className=" border bg-red-400 border-gray-700 p-3 w-1/2  rounded cursor-pointer hover:bg-red-700 text-black  transition-all duration-300"
          >
            delete All
          </button>
        </div>
      ) : (
        <div className=" text-5xl py-4 font-stretch-ultra-condensed"> No Task</div>
      )}
    </div>
  );
}

export default TasksList;
