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
          <div class="container h-full w-screen">
            <div class="flex flex-between h-full p-8">
              <div class="w-2/6 py-12">
                <div class="h-2/4 py-2 boks">
                  <div class="w-full h-full px-2 flex flex-col">
                    <div class="relative overflow-hidden bg-white rounded-xl shadow mb-2">
                      <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                        <div class="flex items-center space-x-4 mr-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png" alt="My profile" class="object-contain w-8" />
                        </div>
                        <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                          <div class="font-semibold text-gray-700">MAD 01</div>
                          <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="relative overflow-hidden bg-white rounded-xl shadow">
                        <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                          <div class="flex items-center space-x-4 mr-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png" alt="My profile" class="object-contain w-8" />
                          </div>
                          <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                            <div class="font-semibold text-gray-700">MAD 01</div>
                            <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-2/4 py-2">
                  <div class="w-full h-full px-2 flex flex-col">
                    <div class="relative overflow-hidden bg-white rounded-xl shadow mb-2">
                      <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                        <div class="flex items-center space-x-4 mr-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/FemalePink.png" alt="My profile" class="object-contain w-8" />
                        </div>
                        <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                          <div class="font-semibold text-gray-700">MAD 0111</div>
                          <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="relative overflow-hidden bg-white rounded-xl shadow">
                        <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                          <div class="flex items-center space-x-4 mr-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png" alt="My profile" class="object-contain w-8" />
                          </div>
                          <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                            <div class="font-semibold text-gray-700">MAD 01</div>
                            <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-2/6">
                <div class="h-full">
                  <div class="w-full h-full px-2 flex flex-col justify-center">
                    <div class="relative overflow-hidden bg-white rounded-xl shadow mb-2">
                      <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                        <div class="flex items-center space-x-4 mr-2">
                          <img src="/img/female.png" alt="My profile" class="object-contain w-8" />
                        </div>
                        <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                          <div class="font-semibold text-gray-700">MAD 01</div>
                          <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                        </div>
                      </div>
                    </div>
                    <div class="relative overflow-hidden bg-white rounded-xl shadow">
                      <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                        <div class="flex items-center space-x-4 mr-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png" alt="My profile" class="object-contain w-8" />
                        </div>
                        <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                          <div class="font-semibold text-gray-700">MAD 01</div>
                          <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-2/6 py-56">
                <div class="h-full">
                  <div class="w-full h-full px-2 flex items-center">
                    <div class="relative overflow-hidden bg-white rounded-xl shadow mb-2">
                      <div class="flex items-center w-full px-4 py-0 lg:py-2 bg-white border shadow rounded-xl">
                        <div class="flex items-center space-x-4 mr-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/FemalePink.png" alt="My profile" class="object-contain w-8" />
                        </div>
                        <div class="flex-grow p-1 lg:p-3 max-w-16 truncate">
                          <div class="font-semibold text-gray-700">MAD 01</div>
                          <div class="text-sm text-gray-500">PPMBSI 2020 545555444</div>
                        </div>
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
