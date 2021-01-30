import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Get, Post } from "../lib";

function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    Post("v1/user/login", { email, password }).then((res) => {
      localStorage.setItem("token", res.token);
      localStorage.setItem("isLoggedIn", true);
      Router.push("/");
    });
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen p-12 bg-gray-100 lg:p-0">
        <div className="w-full bg-white rounded-lg shadow-lg lg:w-1/4">
          <div className="w-full p-6">
            <label className="block mb-2">
              <span className="text-gray-700">Email</span>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full my-1 bg-gray-100 border-transparent rounded shadow-md focus:border-gray-500 focus:bg-white focus:ring-0"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full my-1 bg-gray-100 border-transparent rounded shadow-md focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <div className="flex items-center justify-end mt-6">
              <button
                onClick={handleSignIn}
                className="px-3 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-600 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default signIn;
