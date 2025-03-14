import React from "react";
import { FaEdit } from "react-icons/fa";

function TasksList() {
  return (
    <>
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
          <tbody>
            <tr>
              <th>
                {" "}
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-md border border-gray-700"
                />
              </th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist lor</td>
              <td className="flex gap-1">
                <button className="btn btn-outline btn-error">Delete</button>
                <FaEdit size={35} className="cursor-pointer" />
              </td>{" "}
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                {" "}
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-md border border-gray-700"
                />
              </th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td className="flex gap-1">
                <button className="btn btn-outline btn-error">Delete</button>
                <FaEdit size={35} className="cursor-pointer" />
              </td>{" "}
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                {" "}
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-md border border-gray-700"
                />
              </th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td className="flex gap-1">
                <button className="btn btn-outline btn-error">Delete</button>
                <FaEdit size={35} className="cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TasksList;
