import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="leading-normal tracking-normal bg-gray-100">
      <nav id="header" className="fixed top-0 z-10 w-full bg-white shadow">
        <div className="container flex flex-wrap items-center w-full pt-3 pb-3 mx-auto mt-0 md:pb-0">
          <div className="w-1/2 pl-2 md:pl-0">
            <Link href="/">
              <a
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <img src="/img/mad-logo.png" className="w-16 rounded-2xl" />
                <span className="ml-2 text-xl font-bold tracking-wide text-pink-600 uppercase">
                  Warrior
                </span>
              </a>
            </Link>
          </div>
          <div className="w-1/2 pr-0">
            <div className="relative flex inline-block float-right">
              <div className="relative text-sm">
                <button
                  onClick={(e) => setUserOpen(!isUserOpen)}
                  id="userButton"
                  className="flex items-center mr-3 focus:outline-none"
                >
                  <img
                    className="w-8 h-8 mr-4 rounded-full"
                    src="/img/avatar.jpeg"
                    alt="Avatar of User"
                  />
                  <span className="hidden md:inline-block">Hi, User </span>
                  <svg
                    className="h-2 pl-2"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    enableBackground="new 0 0 129 129"
                  >
                    <g>
                      <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                    </g>
                  </svg>
                </button>
                <div
                  id="userMenu"
                  className={`bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 ${
                    isUserOpen ? "" : "invisible"
                  }`}
                >
                  <ul className="list-reset">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-900 no-underline hover:bg-gray-400 hover:no-underline"
                      >
                        My account
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-900 no-underline hover:bg-gray-400 hover:no-underline"
                      >
                        Notifications
                      </a>
                    </li>
                    <li>
                      <hr className="mx-2 border-t border-gray-400" />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-900 no-underline hover:bg-gray-400 hover:no-underline"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block pr-4 lg:hidden">
                <button
                  onClick={(e) => setIsMenuOpen(!isMenuOpen)}
                  id="nav-toggle"
                  className="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded appearance-none hover:text-gray-900 hover:border-teal-500 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white z-20 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="nav-content"
          >
            <ul className="items-center flex-1 px-4 list-reset lg:flex md:px-0">
              <li className="my-2 mr-6 md:my-0">
                <Link href="/">
                  <a
                    href="/"
                    className={`block py-1 md:py-3 pl-1 align-middle ${
                      router.pathname == "/"
                        ? "text-pink-600 border-pink-600"
                        : "text-gray-500 border-white"
                    } no-underline hover:text-gray-900 border-b-2 hover:border-pink-600`}
                  >
                    <i className="mr-3 fas fa-home fa-fw" />
                    <span className="pb-1 text-sm md:pb-0">Beranda</span>
                  </a>
                </Link>
              </li>
              <li className="my-2 mr-6 md:my-0">
                <Link href="/merpati">
                  <a
                    href="/merpati"
                    className={`block py-1 md:py-3 pl-1 align-middle ${
                      router.pathname == "/merpati"
                        ? "text-pink-600 border-pink-600"
                        : "text-gray-500 border-white"
                    } no-underline hover:text-gray-900 border-b-2 hover:border-pink-600`}
                  >
                    <i className="mr-3 fas fa-crow fa-fw" />
                    <span className="pb-1 text-sm md:pb-0">Merpati</span>
                  </a>
                </Link>
              </li>
              <li className="my-2 mr-6 md:my-0">
                <a
                  href="#"
                  className="block py-1 pl-1 text-gray-500 no-underline align-middle border-b-2 border-white md:py-3 hover:text-gray-900 hover:border-purple-500"
                >
                  <i className="mr-3 fa fa-book-reader fa-fw" />
                  <span className="pb-1 text-sm md:pb-0">Trah</span>
                </a>
              </li>
              <li className="my-2 mr-6 md:my-0">
                <a
                  href="#"
                  className="block py-1 pl-1 text-gray-500 no-underline align-middle border-b-2 border-white md:py-3 hover:text-gray-900 hover:border-green-500"
                >
                  <i className="mr-3 fas fa-sliders-h fa-fw" />
                  <span className="pb-1 text-sm md:pb-0">Team</span>
                </a>
              </li>
              <li className="my-2 mr-6 md:my-0">
                <a
                  href="#"
                  className="block py-1 pl-1 text-gray-500 no-underline align-middle border-b-2 border-white md:py-3 hover:text-gray-900 hover:border-red-500"
                >
                  <i className="mr-3 fa fa-wallet fa-fw" />
                  <span className="pb-1 text-sm md:pb-0">Payments</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
