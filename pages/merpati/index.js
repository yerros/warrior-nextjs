import React, { Component } from "react";
import Layout from "../../component/Layout";
import Table from "../../component/Table";
import axios from "axios";
import Link from "next/link";
import { Get } from "../../lib";

class merpati extends Component {
  constructor() {
    super();
    this.state = {
      pigeons: [],
    };
  }

  componentDidMount() {
    this.getDataPigeon();
  }
  getDataPigeon() {
    Get("v1/merpati").then((res) => {
      this.setState({
        pigeons: res,
      });
    });
  }
  render() {
    return (
      <Layout title="Merpati">
        <div className="w-auto mx-auto">
          <div className="flex flex-row-reverse px-6 py-4">
            <div className="items-center justify-center sm:flex">
              <Link href="/merpati/add">
                <a className="px-3 py-2 text-xs font-bold text-gray-100 bg-pink-600 rounded-full cursor-pointer hover:bg-pink-700 hover:text-white focus:outline-none">
                  <i className="mr-1 fas fa-plus"></i>Tambah Merpati
                </a>
              </Link>
            </div>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 pl-10 mr-2 text-sm text-white bg-gray-100 rounded-full w-60 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </div>
          <div className="my-6 bg-white rounded shadow-md">
            <Table
              pigeons={this.state.pigeons}
              showModal={this.state.showModalEdit}
              toggleShowHideEdit={this.toggleShowHideEdit}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default merpati;
