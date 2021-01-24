import React, { Component } from "react";
import Layout from "../../component/Layout";

export default class addNew extends Component {
  render() {
    return (
      <Layout title="Tambah Merpati">
        <div className="container w-full h-full">
          <div className="text-2xl font-semibold">Tambah Merpati</div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Ring Kandang / nama burung</span>
                <div className="flex">
                  <input type="text" name="name" id="" className="mt-1 mr-2 block w-full rounded" />
                  <button className="p-1 bg-pink-600 rounded text-white focus:outline-none">
                    <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </label>
              <label className="block">
                <span className="text-gray-700">Ring Kandang / nama burung</span>
                <input type="text" name="name" id="" className="mt-1 block w-full rounded" />
              </label>
            </div>
            <div>2</div>
          </div>
        </div>
      </Layout>
    );
  }
}
