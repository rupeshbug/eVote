import React from "react";

const Navbar = () => {
  return (
    <nav
      className="h-20 px-10 bg-161635 flex justify-between items-center text-white border-b-2 border-slate"
      style={{ backgroundColor: "#161635" }}
    >
      <div className="flex items-center px-4 text-xl font-bold w-1/2">
        eVote
      </div>
      <ul className="flex justify-around w-1/2">
        <li>Home</li>
        <li>About Us</li>
        <li>Signup</li>
        <li>Create Event</li>
      </ul>
    </nav>
  );
};

export default Navbar;
