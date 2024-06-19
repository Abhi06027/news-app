import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center w-full justify-between gap-6 shadow-md p-6">
      <h2 className="text-2xl font-bold">NEWS</h2>
      <div>
        <button
          type="submit"
          className="text-white bottom-2.5 bg-[#9450ff] font-medium rounded-lg text-sm px-4 py-4"
        >
          Read ePaper
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
