"use client";
import Image from "next/image";
import { Tabs } from "../../ui/tabs";

import start25 from "@/img/reward-tiers/25.webp";
import start100 from "@/img/reward-tiers/100.webp";
import start200 from "@/img/reward-tiers/200.webp";
import start300 from "@/img/reward-tiers/300.webp";
import start400 from "@/img/reward-tiers/400.webp";
import Datos from "./datos";
export default function RewardTiers() {
  const tabs = [
    {
      title: (
        <p className="md:text-2xl">
          25 <span className="text-[#cba258] text-xs md:text-sm">★</span>
        </p>
      ),
      value: "25",
      content: (
        <div className="  pb-12 md:flex md:items-center md:py-8 md:gap-12 md:justify-center ">
          <Datos id={"0"} />
        </div>
      ),
    },
    {
      title: (
        <p className="md:text-2xl">
          100 <span className="text-[#cba258] text-xs md:text-sm">★</span>
        </p>
      ),
      value: "100",
      content: (
        <div className="  pb-12 md:flex md:items-center md:py-8 md:gap-12 md:justify-center ">
          <Datos id={"1"} />
        </div>
      ),
    },

    {
      title: (
        <p className="md:text-2xl">
          200 <span className="text-[#cba258] text-xs md:text-sm">★</span>
        </p>
      ),
      value: "200",
      content: (
        <div className="  pb-12 md:flex md:items-center md:py-8 md:gap-12 md:justify-center ">
          <Datos id={"2"} />
        </div>
      ),
    },

    {
      title: (
        <p className="md:text-2xl">
          300 <span className="text-[#cba258] text-xs md:text-sm">★</span>
        </p>
      ),
      value: "300",
      content: (
        <div className="  pb-12 md:flex md:items-center md:py-8 md:gap-12 md:justify-center ">
          <Datos id={"3"} />
        </div>
      ),
    },

    {
      title: (
        <p className="md:text-2xl">
          {" "}
          400 <span className="text-[#cba258] text-xs md:text-sm">★</span>
        </p>
      ),
      value: "400",
      content: (
        <div className="  pb-12 md:flex md:items-center md:py-8 md:gap-12 md:justify-center ">
          <Datos id={"4"} />
        </div>
      ),
    },
  ];
  //console.log(tabs);

  return (
    <>
      <section className="pt-12 bg-[#d4e8e152] ">
        <div>
          <h2 className="text-2xl font-semibold text-center md:text-[28px]">
            Get your favorites for free
          </h2>
        </div>
        <div className=" md:h-[20rem] [perspective:1000px] relative  flex flex-col  mx-auto w-full  items-start justify-start mt-[22px]  md:mt-14 md:mb-16">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}

const Start25 = () => {
  return (
    <>
      <div className="py-8">
        <Image
          src={start25}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto"
        />
      </div>
      <div className="px-4">
        <h3 className="text-center font-semibold text-lg pb-[18px]">
          Customize your drink
        </h3>
        <p className="text-center text-sm">
          Make your drink just right with an extra espresso shot, nondairy milk
          or a dash of your favorite syrup.
        </p>
      </div>
    </>
  );
};
const Start100 = () => {
  return (
    <>
      <div className="py-8">
        <Image
          src={start100}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto"
        />
      </div>
      <div className="px-4">
        <h3 className="text-center font-semibold text-lg pb-[18px]">
          Brewed hot or iced coffee or tea, bakery item, packaged snack and more
        </h3>
        <p className="text-center text-sm">
          Treat yourself to an iced coffee, buttery croissant, bag of chips and
          more.
        </p>
      </div>
    </>
  );
};
const Start200 = () => {
  return (
    <>
      <div className="py-8">
        <Image
          src={start200}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto"
        />
      </div>

      <div className="px-4">
        <h3 className="text-center font-semibold text-lg pb-[18px]">
          Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
        </h3>
        <p className="text-center text-sm">
          Turn good mornings great with a delicious handcrafted drink of your
          choice, breakfast sandwich or oatmeal on us.
        </p>
      </div>
    </>
  );
};
const Start300 = () => {
  return (
    <>
      <div className="py-8">
        <Image
          src={start300}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto"
        />
      </div>

      <div className="px-4">
        <h3 className="text-center font-semibold text-lg pb-[18px]">
          Sandwich, protein box or at-home coffee
        </h3>
        <p className="text-center text-sm">
          Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of
          coffee—including Starbucks VIA Instant®.
        </p>
      </div>
    </>
  );
};
const Start400 = () => {
  return (
    <>
      <div className="py-8">
        <Image
          src={start400}
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto"
        />
      </div>

      <div className="px-4">
        <h3 className="text-center font-semibold text-lg pb-[18px]">
          Select Starbucks® merchandise
        </h3>
        <p className="text-center text-sm">
          Take home a signature cup, drink tumbler or your choice of coffee
          merch up to $20.
        </p>
      </div>
    </>
  );
};
