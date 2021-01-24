import React, { Component } from "react";
import Layout from "../../component/Layout";
import styles from '../../styles/Trah.module.css'

export default class test extends Component {
  render() {
    return (
      <Layout>
        <div className="playground rounded-xl shadow ">
          <div className="brackets_container">
            <div className="font-semibold text-xl p-6">
              Nama Team
            </div>
            <table>
              <thead>
                <tr>
                  <th><span></span></th>
                  <th><span></span></th>
                  <th><span></span></th>
                </tr>
              </thead>
              <tbody>
                <tr id="playground">
                  <td className="round_column r_8">
                    <div className="mtch_container">
                      <div className="match_unit">
                        <div className="m_segment m_top winner" data-team-id="9">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="m_segment m_botm loser" data-team-id="12">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mtch_container">
                      <div className="match_unit">
                        <div className="m_segment m_top loser" data-team-id="14">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="m_segment m_botm winner" data-team-id="16">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="round_column r_4">
                    <div className="mtch_container">
                      <div className="match_unit">
                        <div className="m_segment m_top winner" data-team-id="9">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="m_segment m_botm loser" data-team-id="16">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="round_column r_2">
                    <div className="mtch_container">
                      <div className="match_final">
                        <div className="m_segment m_top winner" data-team-id="9">
                          <span>
                            <div className="flex items-center space-x-4 px-2">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Male_Blue.png/600px-Male_Blue.png"
                                alt="My profile"
                                className="object-contain w-8"
                              />
                              <div className="flex-grow p-0 lg:p-2 w-16 truncate truncate">
                                <div className="font-semibold text-gray-700">MAD 01</div>
                                <div className="font-normal text-gray-500">
                                  PPMBSI 2020 545555444
                          </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}
