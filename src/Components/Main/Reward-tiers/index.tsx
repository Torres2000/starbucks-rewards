"use client";
import Image from "next/image";
import { Tabs } from "../../ui/tabs";

import start25 from "@/img/reward-tiers/25.webp";
import start100 from "@/img/reward-tiers/100.webp";
import start200 from "@/img/reward-tiers/200.webp";
import start300 from "@/img/reward-tiers/300.webp";
import start400 from "@/img/reward-tiers/400.webp";
export default function RewardTiers() {
  const tabs = [
    {
      title: (
        <p>
          25 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "25",
      content: (
        <div className=" bg-[#d4e9e2] pb-12 ">
          <Start25 />
        </div>
      ),
    },
    {
      title: (
        <p>
          100 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "100",
      content: (
        <div className=" bg-[#d4e9e2] pb-12">
          {" "}
          <Start25 />
        </div>
      ),
    },

    {
      title: (
        <p>
          200 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "200",
      content: (
        <div className=" bg-[#d4e9e2] pb-12">
          {" "}
          <Start25 />
        </div>
      ),
    },

    {
      title: (
        <p>
          300 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "300",
      content: (
        <div className=" bg-[#d4e9e2] pb-12">
          {" "}
          <Start25 />
        </div>
      ),
    },

    {
      title: (
        <p>
          400 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "400",
      content: (
        <div className=" bg-[#d4e9e2] pb-12 ">
          {" "}
          <Start25 />
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="pt-8 h-[90vh]">
        <div className="pt-12 bg-[#d3e8e152] ">
          <div>
            <h2 className="text-2xl font-semibold text-center">
              Get your favorites for free
            </h2>
          </div>
          <div>
            <div className=" [perspective:1000px] text-black relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-4">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const Start25 = () => {
  return (
    <>
      <div>
        <div>
          <div className="py-8">
            <Image
              src={start25}
              alt="Start"
              width="1000"
              height="1000"
              className="object-cover object-left-top"
            />
          </div>
          <div className="px-4">
            <h3 className="text-center font-semibold text-lg pb-[18px]">
              Customize your drink
            </h3>
            <p className="text-center text-sm">
              Make your drink just right with an extra espresso shot, nondairy
              milk or a dash of your favorite syrup.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
