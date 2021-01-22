import React, { Component } from "react";
import Layout from "../../component/Layout";

export default class test extends Component {
  render() {
    return (
      <Layout>
        <div className="my-6 bg-white rounded shadow-xl">
          <div className="px-4">
            <div className="justify-between block md:flex md:-mx-2">
              <div className="w-full mb-4 lg:w-1/3 md:mx-2 md:mb-">
                <div className="relative overflow-hidden bg-white rounded-lg shadow">
                  <div className="flex items-center w-full p-2 bg-white border shadow rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/male.png"
                        alt="My profile"
                        className="w-8 h-14"
                      />
                    </div>
                    <div className="flex-grow p-3">
                      <div className="font-semibold text-gray-700">MAD 01</div>
                      <div className="text-sm text-gray-500">
                        PPMBSI 2020 / 952555
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mb-4 lg:w-1/3 md:mx-2 md:mb-">
                <div className="relative overflow-hidden bg-white rounded-lg shadow">
                  <div className="flex items-center w-full p-2 bg-white border shadow rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/male.png"
                        alt="My profile"
                        className="w-8 h-14"
                      />
                    </div>
                    <div className="flex-grow p-3">
                      <div className="font-semibold text-gray-700">MAD 01</div>
                      <div className="text-sm text-gray-500">
                        PPMBSI 2020 / 952555
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
