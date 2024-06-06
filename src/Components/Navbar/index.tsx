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
        <section className="max-w-[1440px] m-auto flex justify-between">
          <section className="h-16 flex w-screen justify-between pr-[1.4rem] pl-4">
            <div className="flex">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="w-8"
                priority
              />
            </div>
            <div className="flex items-center">
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
            className={`h-[calc(100%-64px)] top-16 bottom-auto fixed w-full bg-black/35 ${
              abierto ? "" : "hidden "
            }`}
          >
            <section className="w-[80vw]  right-0 fixed  bg-white h-full pt-12 animate__animated animate__fadeInRightBig">
              <section className="flex flex-row items-center gap-5 ">
                <div>
                  <ul className="flex flex-col md:space-x-3 space-y-8">
                    <li className="md:uppercase   font-medium  px-8">
                      <a href="#" className="text-lg">
                        Menu
                      </a>
                    </li>
                    <li className="md:uppercase  font-medium px-8">
                      <a href="#" className="text-lg">
                        Rewards
                      </a>
                    </li>
                    <li className="md:uppercase  font-medium  px-8">
                      <a href="#" className="text-lg">
                        Gift Cards
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <hr className="my-8 mx-8 h-[2px] bg-gray-600" />
              <section className="flex flex-col-reverse px-6">
                <div>
                  <a
                    href="#"
                    className="flex items-center mr-16 gap-2 mt-6 text-sm font-bold"
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
