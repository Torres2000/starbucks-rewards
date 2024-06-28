"use client";
import delta from "@/img/Keep-Rewards/delta-skymiles.webp";
import bank from "@/img/Keep-Rewards/bank-of-america.webp";
import marriott from "@/img/Keep-Rewards/marriott-logo.webp";
import opennew from "@/img/open-in-new.svg";
import { ArrowSquareOut } from "phosphor-react";
import Image from "next/image";
export default function KeepRewarsd() {
  return (
    <>
      <section>
        <div className="px-4 fondoKeep md:p-8">
          <div className="md:bg-white">
            <div className="flex flex-col items-center pt-5 pb-8">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">
                Keep the Rewards Coming
              </h2>
              <p className="text-center text-sm pt-3 md:text-base">
                The Rewards don't stop at your morning coffee. Join Starbucks®
                Rewards and unlock perks from our partners, all while earning
                more Stars.
              </p>
            </div>
            <ul>
              <li className="flex items-center my-5 md:flex-col">
                <div className="sm:max-w-28 md:max-w-none">
                  <Image src={delta} alt="Delta-img" />
                </div>
                <p className="pl-4 text-sm md:p-0 md:text-base md:text-center">
                  <a
                    href="#"
                    className="text-sm inline-flex items-center text-[#006241] md:text-base"
                  >
                    <span className="border-[1px] border-b-[#006241] md:text-center">
                      Link your Delta SkyMiles®
                    </span>{" "}
                    <ArrowSquareOut size={14} className=" md:w-6 md:h-6" />
                  </a>{" "}
                  and Starbucks® Rewards accounts to earn miles on Starbucks
                  Card reloads of $25 or more, plus Double Stars on travel days.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
