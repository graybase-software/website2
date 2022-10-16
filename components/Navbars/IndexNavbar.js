import React from "react";
import Link from "next/link";
import Image from "next/image";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { handleClick, whatRef, howRef, getRef, companyRef, contactRef } = props;

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 pt-2 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                {/* <img src="/img/graybaseBluelogo.png" width="200px"/>
                <img src="/img/logoPurple.png" width="200px" />
                <img src="/img/logoRed.png" width="200px" />
                <img src="/img/logoLightgreen.png" width="200px" />
                <img src="/img/logoSoftwareCompany.png" width="200px" />
                <img src="/img/grayLogo2.png" width="200px" /> */}
                {/* <img src="/img/logo_main.png" width="200px" /> */}
                <img src="/img/logo_main1.png" width="200px" />


              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              <li className="flex items-center" style={{ cursor: "pointer" }}>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => handleClick(whatRef)}
                >
                  {/* <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " /> */}
                  <span className="lg inline-block ml-2">What We Do</span>
                </a>
              </li>

              <li className="flex items-center" style={{ cursor: "pointer" }}>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => handleClick(howRef)}
                >
                  {/* <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " /> */}
                  <span className="lg inline-block ml-2">How We Do</span>
                </a>
              </li>
              <li className="flex items-center" style={{ cursor: "pointer" }}>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => handleClick(getRef)}
                >
                  {/* <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " /> */}
                  <span className="lg inline-block ml-2">What You Get</span>
                </a>
              </li>
              <li className="flex items-center" style={{ cursor: "pointer" }}>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => handleClick(companyRef)}
                >
                  {/* <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " /> */}
                  <span className="lg inline-block ml-2">Company</span>
                </a>
              </li>

              <li className="flex items-center" style={{ cursor: "pointer"}}>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  onClick={() => handleClick(contactRef)}
                >
                  {/* <i className="text-blueGray-400 fab fa-github text-lg leading-lg " /> */}
                  <span className="lg inline-block ml-2">Contact Us</span>
                </a>
              </li>

              {/* <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
