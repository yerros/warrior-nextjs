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
      <div className="container w-full mx-auto pt-20 h-screen">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal h-full">
          {props.children}
        </div>
      </div>
    </>
  );
}
