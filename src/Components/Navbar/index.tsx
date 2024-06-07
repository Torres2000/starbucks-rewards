"use client";
import Image from "next/image";
import ubicacion from "@/img/ubicacion.svg";
import logo from "@/img/logo.svg";
import menu from "@/img/icon-menu.svg";
import cerrar from "@/img/icon-cerrar.svg";
import { useState } from "react";
import "animate.css";

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  function changeMenu() {
    setAbierto(!abierto);
  }
  console.log(abierto);

  return (
    <>
      <nav>
        <section className="max-w-[1440px] m-auto flex justify-between lg:h-[6.2rem] lg:px-10 lg:gap-12 2xl:px-0">
          <section className="h-16 flex w-screen justify-between pr-[1.4rem] pl-4 sm:h-[4.5rem] md:px-7 md:h-[5.2rem] lg:w-auto  lg:h-full lg:p-0">
            <div className="flex">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="w-8 sm:w-10 md:w-14"
                priority
              />
            </div>
            <div className="flex items-center lg:hidden">
              <button onClick={() => changeMenu()}>
                <Image
                  id="menu"
                  src={menu}
                  alt="Logo"
                  width={100}
                  height={100}
                  className={`w-6 h-6 mr-1 animate__animated ${
                    abierto ? "hidden animate__rotateOut" : "animate__rotateIn"
                  }`}
                  priority
                />
              </button>
              <button onClick={() => changeMenu()}>
                <Image
                  id="cerrar"
                  src={cerrar}
                  alt="Logo"
                  width={100}
                  height={100}
                  className={`w-6 h-6 mr-1 animate__animated ${
                    abierto ? "animate__rotateIn" : "hidden animate__rotateOut"
                  }`}
                  priority
                />
              </button>
            </div>
          </section>
          <section
            className={`h-[calc(100%-64px)] top-16 bottom-auto fixed w-full bg-black/35  sm:h-[calc(100%-83px)] sm:top-20 block lg:bg-white lg:relative lg:top-0 lg:h-full ${
              abierto ? "" : "hidden lg:block  "
            }`}
          >
            <section
              className={`w-[80vw]  right-0 fixed  bg-white h-full pt-12  lg:relative lg:w-auto lg:flex lg:p-0 lg:justify-between ${
                abierto
                  ? "animate__animated  animate__fadeInRightBig"
                  : "hiddern "
              }`}
            >
              <section className="flex flex-row items-center gap-5 lg:h-full">
                <div className="lg:h-full">
                  <ul className="flex flex-col  space-y-8 lg:flex-row lg:items-center lg:space-x-7 lg:space-y-0 lg:h-full">
                    <li className="   font-medium  px-8 lg:px-0 lg:h-full">
                      <a
                        href="#"
                        className="text-lg md:md:text-2xl lg:uppercase lg:text-base lg:font-bold lg:h-full lg:flex lg:items-center lg:border-b-4 lg:border-white hover:text-teal-600 "
                      >
                        Menu
                      </a>
                    </li>
                    <li className="  font-medium px-8 lg:px-0 lg:h-full">
                      <a
                        href="#"
                        className="text-lg md:md:text-2xl lg:uppercase lg:text-base lg:font-bold lg:h-full lg:flex lg:items-center lg:border-b-4 lg:border-white hover:text-teal-600  lg:border-b-teal-700"
                      >
                        Rewards
                      </a>
                    </li>
                    <li className="  font-medium  px-8 lg:px-0 lg:h-full">
                      <a
                        href="#"
                        className="text-lg md:md:text-2xl lg:uppercase lg:text-base lg:font-bold lg:h-full lg:flex lg:items-center lg:border-b-4 lg:border-white hover:text-teal-600 "
                      >
                        Gift Cards
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <hr className="my-8 mx-8 h-[2px] bg-gray-600" />
              <section className="flex flex-col-reverse px-6 lg:flex-row lg:items-center lg:p-0">
                <div>
                  <a
                    href="#"
                    className="flex items-center mr-16 gap-2 mt-6 text-sm font-bold  lg:my-0 lg:mr-16"
                  >
                    <Image
                      src={ubicacion}
                      alt="icon-ubicacion"
                      width={100}
                      height={100}
                      className="w-6 h-6 "
                      priority
                    />
                    Find a store
                  </a>
                </div>
                <div className="flex gap-5">
                  <button className="text-sm py-1 px-3 font-medium  border-black border rounded-full">
                    Sing in
                  </button>
                  <button className="text-sm bg-black text-white font-medium py-1 px-4 border border-black bord rounded-full">
                    Join now
                  </button>
                </div>
              </section>
            </section>
          </section>
        </section>
      </nav>
    </>
  );
}
