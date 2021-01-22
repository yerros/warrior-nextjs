import React, { Component } from "react";
import Layout from "../../component/Layout";

export default class addNew extends Component {
  render() {
    return (
      <Layout>
        <div className="max-w-6xl px-12 py-20 mx-auto mb-24 bg-white shadow-xl lg:px-24">
          <form>
            <div className="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-6 -mx-3 md:flex">
                <div className="px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="mb-2 text-xs font-bold tracking-wide text-black uppercase"
                    htmlFor="company"
                  >
                    Company Name*
                  </label>
                  <input
                    className="w-full px-4 py-3 mb-3 text-black bg-gray-200 border border-gray-200 rounded"
                    id="company"
                    type="text"
                    placeholder="Netboard"
                  />
                  <div>
                    <span className="text-xs italic text-red-500">
                      Please fill out this field.
                    </span>
                  </div>
                </div>
                <div className="px-3 md:w-1/2">
                  <label
                    className="mb-2 text-xs font-bold tracking-wide text-black uppercase"
                    htmlFor="title"
                  >
                    Title*
                  </label>
                  <input
                    className="w-full px-4 py-3 mb-3 text-black bg-gray-200 border border-gray-200 rounded"
                    id="title"
                    type="text"
                    placeholder="Software Engineer"
                  />
                </div>
              </div>
              <div className="mb-6 -mx-3 md:flex">
                <div className="px-3 md:w-full">
                  <label
                    className="mb-2 text-xs font-bold tracking-wide text-black uppercase"
                    htmlFor="application-link"
                  >
                    Application Link*
                  </label>
                  <input
                    className="w-full px-4 py-3 mb-3 text-black bg-gray-200 border border-gray-200 rounded"
                    id="application-link"
                    type="text"
                    placeholder="http://...."
                  />
                </div>
              </div>
              <div className="mb-2 -mx-3 md:flex">
                <div className="px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="mb-2 text-xs font-bold tracking-wide text-black uppercase"
                    htmlFor="location"
                  >
                    Location*
                  </label>
                  <div>
                    <select
                      className="w-full px-4 py-3 pr-8 mb-3 text-xs text-black bg-gray-200 border border-gray-200 rounded"
                      id="location"
                    >
                      <option>Abuja</option>
                      <option>Enugu</option>
                      <option>Lagos</option>
                    </select>
                  </div>
                </div>
                <div className="px-3 md:w-1/2">
                  <label
                    className="mb-2 text-xs font-bold tracking-wide text-black uppercase"
                    htmlFor="job-type"
                  >
                    Job Type*
                  </label>
                  <div>
                    <select
                      className="w-full px-4 py-3 pr-8 mb-3 text-xs text-black bg-gray-200 border border-gray-200 rounded"
                      id="job-type"
                    >
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>
                <div className="px-3 md:w-1/2">
                  <label
                    className="mb-2 text-xs font-bold tracking-wide text-black uppercase"
                    htmlFor="department"
                  >
                    Department*
                  </label>
                  <div>
                    <select
                      className="w-full px-4 py-3 pr-8 mb-3 text-xs text-black bg-gray-200 border border-gray-200 rounded"
                      id="department"
                    >
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Customer Support</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-2 -mx-3 md:flex">
                <div className="px-3 md:w-full">
                  <button className="px-4 py-2 font-bold text-white bg-gray-900 border-b-4 border-gray-500 rounded-full md:w-full hover:border-b-2 hover:border-gray-100">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}
