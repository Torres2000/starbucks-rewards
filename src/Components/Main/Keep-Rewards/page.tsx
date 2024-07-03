"use client";
import delta from "@/img/Keep-Rewards/delta-skymiles.webp";
import bank from "@/img/Keep-Rewards/bank-of-america.webp";
import marriott from "@/img/Keep-Rewards/marriott-logo.webp";
import { ArrowSquareOut } from "phosphor-react";
import Image from "next/image";
export default function KeepRewarsd() {
  return (
    <>
      <section>
        <div className="px-4 fondoKeep bg-[#d4e9e2] md:p-8">
          <div className=" md:bg-white pb-10">
            <div className="max-w-[1440px] mx-auto md:px-4 lg:px-7 lg:pb-8">
              <div className="flex flex-col items-center pt-5 pb-8 lg:pt-14 ">
                <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">
                  Keep the Rewards Coming
                </h2>
                <p className="text-center text-sm pt-3 md:text-base">
                  The Rewards dont stop at your morning coffee. Join Starbucks®
                  Rewards and unlock perks from our partners, all while earning
                  more Stars.
                </p>
              </div>
              <ul className="flex flex-col md:flex-row gap-8 md:py-8">
                <li className="flex items-center my-5 md:flex-col">
                  <div className="sm:max-w-28 md:max-w-none lg:max-w-52">
                    <Image src={delta} alt="Delta-img" />
                  </div>
                  <p className="pl-4 text-sm md:p-0 md:text-base md:text-center lg:pt-6">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center text-[#006241] md:text-base"
                    >
                      <span className="border-[1px] leading-none border-b-[#006241] md:text-center">
                        Link your Delta SkyMiles®
                      </span>{" "}
                      <ArrowSquareOut size={14} className=" md:w-6 md:h-6" />
                    </a>{" "}
                    and Starbucks® Rewards accounts to earn miles on Starbucks
                    Card reloads of $25 or more, plus Double Stars on travel
                    days.{" "}
                    <a href="#">
                      <sup>1</sup>
                    </a>
                  </p>
                </li>
                <li className="flex items-center my-5 md:flex-col">
                  <div className="sm:max-w-28 md:max-w-none lg:max-w-52">
                    <Image src={bank} alt="Delta-img" />
                  </div>
                  <p className="pl-4 text-sm md:p-0 md:text-base md:text-center lg:pt-6">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center text-[#006241] md:text-base"
                    >
                      <span className="border-[1px] leading-none border-b-[#006241] md:text-center">
                        Link your Bank of America
                      </span>{" "}
                      <ArrowSquareOut size={14} className=" md:w-6 md:h-6" />
                    </a>{" "}
                    eligible card and Starbucks® Rewards account to earn 2% Cash
                    Back and Bonus Stars on qualifying Starbucks in-app
                    purchases.
                    <a href="#">
                      <sup>2</sup>
                    </a>
                  </p>
                </li>
                <li className="flex items-center my-5 md:flex-col">
                  <div className="sm:max-w-28 md:max-w-none lg:max-w-52">
                    <Image src={marriott} alt="Delta-img" />
                  </div>
                  <p className="pl-4 text-sm md:p-0 md:text-base md:text-center lg:pt-6">
                    <a
                      href="#"
                      className="text-sm inline-flex items-center text-[#006241] md:text-base"
                    >
                      <span className="border-[1px] leading-none border-b-[#006241] md:text-center">
                        Link your Marriott Bonvoy®
                      </span>{" "}
                      <ArrowSquareOut size={14} className=" md:w-6 md:h-6" />
                    </a>{" "}
                    and Starbucks® Rewards accounts to earn Double Stars during
                    eligible stays, points during any Marriott Bonvoy Week and
                    more.
                    <a href="#">
                      <sup>3</sup>
                    </a>
                  </p>
                </li>
              </ul>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="  text-white font-semibold text-sm bg-[#00754A] px-4 py-2 rounded-full hover:bg-[#00754ae6]"
                >
                  Join Starbucks® Rewards
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
