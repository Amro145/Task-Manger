import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetOneTask, updateData } from "../../../store/api/Api";

function EditPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.taskData);

  useEffect(() => {
    dispatch(GetOneTask(params.id));
  }, [dispatch]);
  const [data, setData] = useState({
    name: "",
    description: "",
    complete: false,
  });

  useEffect(() => {
    if (!loading && tasks.AllTask !== undefined) {
      setData({
        name: tasks.AllTask.name,
        description: tasks.AllTask.description,
        complete: false,
      });
    }
  }, [tasks.AllTask]);

  return (
    <>
      {!loading && tasks.AllTask !== undefined ? (
        <div className="p-5 gap-4 flex flex-col items-center   px-4 border bg-black border-gray-700 absolute top-1/2 w-1/2   z-10">
          <h1>Edit Page</h1>
          <div className="forms flex flex-col gap-4 w-full items-center">
            <input
              type="text"
              placeholder="Name of task"
              className="border border-gray-700 p-1 rounded-xl w-full"
              value={data.name || ""}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  name: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Decsription "
              className="border border-gray-700 p-1 rounded-xl w-full"
              value={data.description || ""}
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }));
              }}
            />
            <Link to={"/"} className="w-full flex justify-center">
              <button
                className=" border border-gray-700 p-3 w-1/2  rounded cursor-pointer hover:bg-amber-50 hover:text-black  transition-all duration-300"
                onClick={() => {
                  dispatch(updateData({ id: params.id, data: data }));
                }}
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>loadin</div>
      )}
    </>
  );
}

export default EditPage;
