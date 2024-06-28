"use client";
import { ArrowSquareOut } from "phosphor-react";
export default function Questions() {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="px-4 md:px-6">
          <div>
            <div className="md:w-2/4 md:ml-[16.6%]">
              <h2 className="font-semibold text-xl mb-4 sm:text-2xl md:text-[28px]">
                Questions?
              </h2>
              <p className="text-sm mb-4">
                We want to help in any way we can. You can ask your barista
                anytime or we’ve answered the most commonly asked{" "}
                <a href="#" className="inline-flex items-center">
                  <span className="text-[#00000094] border-[1px] border-b-[#00000094] leading-none">
                    right over here{" "}
                  </span>{" "}
                  <ArrowSquareOut size={14} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
