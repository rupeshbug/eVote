import React from "react";
import Navbar from "../components/Layout/Navbar";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 px-10 flex">
        <div className="md:w-1/2">
          <img
            className="md:rounded-8px hidden md:block"
            src="/loginImg.png"
            alt="online voting"
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div className="text-left px-5 flex flex-col align-center justify-center w-full mt-10 md:mt-0">
          <h1 className="text-4xl mb-5 text-center tracking-wide">eVote</h1>
          <p className="text-xl text-center text-slate-800 mb-4 tracking-wide">
            Create customized polls to suit your specific needs. Vote securely
            and effortlessly. Join us now!
          </p>
          <div className="mx-auto mt-5">
            <button
              className="flex items-center justify-center max-w-xs px-4 py-3 rounded-lg border-2 w-60"
              style={{ color: "#737373", borderColor: "#ccc" }}
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;