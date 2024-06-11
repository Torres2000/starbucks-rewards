"use client";
import Image from "next/image";
import { Tabs } from "../../ui/tabs";
export default function RewardTiers() {
  const tabs = [
    {
      title: (
        <p>
          25 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>
            25 <span className="text-[#cba258] text-xs">★</span>
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: (
        <p>
          100 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },

    {
      title: (
        <p>
          200 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },

    {
      title: (
        <p>
          300 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },

    {
      title: (
        <p>
          400 <span className="text-[#cba258] text-xs">★</span>
        </p>
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="pt-8">
        <div className="pt-12">
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
const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
