import React, { Component } from "react";
import axios from "axios";
import Layout from "../../component/Layout";

export default class padigree extends Component {
  constructor() {
    super();
    this.state = {
      merpati: "",
    };
  }
  componentDidMount() {
    this.getMerpati();
  }
  getMerpati = () => {
    axios.get("/api/merpati").then((res) => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <Layout>
        <div className="my-6 bg-white rounded shadow-xl">
          <div className="flex p-10 text-3xl font-semibold text-pink-600 sm:relative title">
            Warrior Team
            <span className="block text-lg italic font-thin text-right text-gray-600">
              Malang
            </span>
          </div>
          <div className="flex items-center justify-center p-5 screens">
            <div className="flex flex-wrap -mx-4 sm:items-center">
              <div className="p-2">
                <div className="flex items-center w-full p-2 bg-white border shadow rounded-xl">
                  <div className="space-x-4">
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
              <div className="flex-col items-center p-2 my-auto">
                <div className="flex items-center w-full p-2 mb-32 mr-5 bg-white border shadow rounded-xl">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/img/male.png"
                      alt="My profile"
                      className="w-8 h-14"
                    />
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                      Iwan Makita 90
                    </div>
                    <div className="text-sm text-gray-500">
                      PPMBSI 2020 / 952555
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full p-2 mr-5 bg-white border shadow rounded-xl">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/img/female.png"
                      alt="My profile"
                      className="w-8 h-14"
                    />
                  </div>
                  <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">ELLA 290</div>
                    <div className="text-sm text-gray-500">
                      PPMBSI 2020 / 952555
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 my-auto min-w-2xl">
                <div className="mb-12">
                  <div className="flex items-center w-full p-2 mb-5 mr-5 bg-white border shadow rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/male.png"
                        alt="My profile"
                        className="w-8 h-14"
                      />
                    </div>
                    <div className="flex-grow p-3">
                      <div className="font-semibold text-gray-700">
                        Iwan Makita 90
                      </div>
                      <div className="text-sm text-gray-500">-</div>
                    </div>
                  </div>
                  <div className="flex items-center w-full p-2 mr-5 bg-white border shadow rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/female.png"
                        alt="My profile"
                        className="w-8 h-14"
                      />
                    </div>
                    <div className="flex-grow p-3">
                      <div className="font-semibold text-gray-700">
                        Iwan Makita 80
                      </div>
                      <div className="text-sm text-gray-500">-</div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-center w-full p-2 mb-5 mr-5 bg-white border shadow rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/male.png"
                        alt="My profile"
                        className="w-8 h-14"
                      />
                    </div>
                    <div className="flex-grow p-3">
                      <div className="font-semibold text-gray-700">
                        ELLA 900
                      </div>
                      <div className="text-sm text-gray-500">PPMBSI 2014</div>
                    </div>
                  </div>
                  <div className="flex items-center w-full p-2 mr-5 bg-white border shadow rounded-xl">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/img/female.png"
                        alt="My profile"
                        className="w-8 h-14"
                      />
                    </div>
                    <div className="flex-grow p-3">
                      <div className="font-semibold text-gray-700">
                        ELLA 900
                      </div>
                      <div className="text-sm text-gray-500">-</div>
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
