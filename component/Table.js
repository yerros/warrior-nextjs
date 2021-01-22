import Link from "next/link";
import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table className="text-left w-full border-collapse">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Ring
            </th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              PPMBSI
            </th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-grey-lighter">
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  <img
                    class="w-full h-full rounded-full"
                    src="/img/pigeon.jpeg"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    MAD 90 /
                    <span className="text-gray-500 text-xs font-thin italic ml-1">
                      PPMBSI 922012
                    </span>
                  </p>
                </div>
              </div>
            </td>
            <td className="py-4 px-6 border-b border-grey-light">2021</td>
            <td className="py-4 px-6 border-b border-grey-light">
              <a
                href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded-full text-xs bg-gray-300 hover:bg-green-500 mr-1"
              >
                <i className="far fa-edit mr-0 lg:mr-1"></i>
                <span className="hidden md:inline lg:inline">Edit</span>
              </a>
              <Link href="/merpati/trah">
                <a className="text-white font-bold py-1 px-3 rounded-full text-xs bg-pink-600 hover:bg-blue-dark">
                  <i className="far fa-eye mr-0 lg:mr-1"></i>
                  <span className="hidden md:inline lg:inline">View</span>
                </a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
