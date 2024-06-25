import Image from "next/image";

import A1 from "@/img/ways-to-play/1A.png";
import B1 from "@/img/ways-to-play/1B.webp";
import A2 from "@/img/ways-to-play/2A.png";
import B2 from "@/img/ways-to-play/1B.webp";

export default function CashSTart() {
  return (
    <>
      <section>
        <div className="max-w-[1440px] m-auto py-10 px-4 md:py-16 md:px-6 lg:px-10 md:flex md:flex-col md:items-center">
          <div className="pt-10 pb-12 md:pt-6 md:w-2/3 md:pb-20">
            <h2 className="font-semibold text-xl sm:text-2xl  md:text-[28px] pt-6 pb-5 text-center  ">
              Cash or card, you earn Stars
            </h2>
            <p className="text-center text-sm md:text-base">
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>

          <div className="clasGrid2 lg:mt-3">
            <div className="pb-8 mt-[18px] md:m-0 md:pb-10">
              <p className="font-semibold text-lg md:text-2xl">
                1<span className="text-lg">★ </span>
                <span>per dollar</span>
              </p>
              <p className="text-sm  md:text-base">Pay as you go</p>
            </div>
            <div className="md:grid md:grid-cols-2">
              <div>
                <div className="classGrid pb-10  lg:px-8 lg:pb-0">
                  <div className="pr-4 max-w-32">
                    <Image src={A1} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">
                      Scan and pay separately
                    </h3>
                    <p className="text-sm pt-[14px] md:text-base">
                      Use cash or credit/debit card at the register.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="classGrid pb-10">
                  <div className="pr-4 max-w-32">
                    <Image src={B1} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg">
                      Save payment in the app
                    </h3>
                    <p className="text-sm pt-[14px] md:text-base">
                      Check-out faster by saving a credit/debit card or PayPal
                      to your account. You’ll be able to order ahead or scan and
                      pay at the register in one step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
