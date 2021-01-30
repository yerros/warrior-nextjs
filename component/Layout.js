import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <div className="container w-full h-screen pt-20 mx-auto">
        <div className="w-full h-full px-4 mb-16 leading-normal text-gray-800 md:px-0 md:mt-8">
          {props.children}
        </div>
      </div>
    </>
  );
}
