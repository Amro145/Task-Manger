import React from "react";

function AddInput() {
  return (
    <div className=" flex items-center gap-3 mt-50">
      <input type="text" placeholder="Add Task" className="input input-md w-full" />
      <button className="btn btn-active py-1">submit</button>
    </div>
  );
}

export default AddInput;
