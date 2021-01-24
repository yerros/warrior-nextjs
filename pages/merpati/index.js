import React, { Component } from "react";
import Link from "next/link";
import Layout from "../../component/Layout";
import Table from "../../component/Table";
import ModalTambah from "../../component/ModalTambah";

export default class merpati extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  toggleShowHide = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  render() {
    return (
      <Layout title="Merpati">
        <div className="w-auto mx-auto">
          <div className="flex flex-row-reverse py-4 px-6">
            <div className="sm:flex justify-center items-center">
              <button onClick={() => this.setState({ showModal: !this.state.showModal })} className="text-gray-100 font-bold py-1 px-3 py-2 rounded-full text-xs bg-pink-600 hover:bg-green-500 mr-1 focus:outline-none">
                <i className="fas fa-plus mr-1"></i>Tambah Merpati
                </button>
              {this.state.showModal ? (<ModalTambah onClick={this.toggleShowHide} id="tambah" />) : null}
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
                className="w-60 py-2 mr-2 text-sm text-white bg-gray-100 rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded my-6">
            <Table />
          </div>
        </div>
      </Layout >
    );
  }
}
