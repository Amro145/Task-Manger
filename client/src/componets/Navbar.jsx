import React, { useState } from "react";
import { IoIosMoon, IoMdSunny } from "react-icons/io";

function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <div className=" h-10 fixed  top-0 w-full ">
      <div className=" flex justify-around items-center">
        <h1>TaskManger</h1>
        <button className="cursor-pointer" onClick={() => setDark(!dark)}>
          {dark ? <IoMdSunny size={20} /> : <IoIosMoon size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
