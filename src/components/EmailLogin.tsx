import React, { useState } from "react";
import Input from "./Input";

const EmailLogin = () => {
  const [signUp, setSignUp] = useState(true);
  const [login, setLogin] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-8">
      <div className="flex gap-[1rem]">
        <p
          className="border rounded-full p-2 cursor-pointer bg-purple-800 text-white"
          onClick={() => {
            setSignUp(true);
            setLogin(false);
          }}
        >
          Sign up
        </p>
        <p
          className="border rounded-full p-2 cursor-pointer bg-purple-800 text-white"
          onClick={() => {
            setLogin(true);
            setSignUp(false);
          }}
        >
          Login
        </p>
      </div>
      {signUp && (
        <div className="flex flex-col items-center justify-center gap-2 pt-8">
          <p className="font-semibold">Sign up with your credentials</p>

          <Input
            label="Email"
            type="email"
            className="w-full md:w-[400px]"
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            className="w-full md:w-[400px]"
            placeholder="Enter your password"
          />
          <button className="p-2 rounded-lg shadow-sm bg-purple-900 text-white">
            Sign Up
          </button>
        </div>
      )}
      {login && (
        <div className="flex flex-col items-center justify-center gap-2 pt-8">
          <p className="font-semibold">Login with your credentials</p>
          <Input
            label="Email"
            type="email"
            className="w-full md:w-[400px]"
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            className="w-full md:w-[400px]"
            placeholder="Enter your password"
          />
          <button className="p-2 rounded-lg shadow-sm bg-purple-900 text-white">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailLogin;
