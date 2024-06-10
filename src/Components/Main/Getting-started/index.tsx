import Image from "next/image";
import getting_1 from "@/img/getting-started/getting-started-1@2x.webp";
import getting_2 from "@/img/getting-started/getting-started-2@2x.webp";
import getting_3 from "@/img/getting-started/getting-started-3@2x.webp";
export default function GettingStarted() {
  return (
    <>
      <section>
        <div className="py-8 px-4 md:py-16 md:px-6">
          <div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold md:text-[28px]">
                Getting started is easy
              </h2>
              <p className="text-sm pt-[18px] md:text-base">
                Earn Stars and get rewarded in a few easy steps.
              </p>
            </div>
            <div className="pt-12 space-y-9 md:space-y-0 md:flex md:mx-9">
              <div className="flex items-start gap-[16px] md:flex-col md:items-center md:mr-5">
                <Image
                  src={getting_1}
                  width={48}
                  height={48}
                  alt="Step 1"
                  className="md:pb-3"
                />
                <div className=" md:hidden ">
                  <h3 className="font-semibold ">
                    Download the Starbucks® app
                  </h3>
                  <p className="pt-[18px] text-sm">
                    <a href="" className="border-b-[1px] border-b-black">
                      Join in the app
                    </a>{" "}
                    to get access to the full range of Starbucks® Rewards
                    benefits. You can also {""}
                    <a href="#" className="border-b-[1px] border-b-black">
                      join online
                    </a>
                  </p>
                </div>
                <div className="md:block md:text-center">
                  <h3 className="font-semibold md:text-lg ">
                    Create an account
                  </h3>
                  <p className="pt-[18px] text-sm md:text-base">
                    To get started,{" "}
                    <a href="" className="border-b-[1px] border-b-black">
                      join now
                    </a>{" "}
                    You can also{" "}
                    <a href="" className="border-b-[1px] border-b-black">
                      join in the app
                    </a>{" "}
                    to get access to the full range of Starbucks® Rewards
                    benefits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[16px] md:flex-col md:items-center md:mx-5 ">
                <Image
                  src={getting_2}
                  width={48}
                  height={48}
                  alt="Step 1"
                  className="md:pb-3"
                />
                <div className="md:text-center">
                  <h3 className="font-semibold md:text-lg">
                    Order and pay how you’d like
                  </h3>
                  <p className="pt-[18px] text-sm md:text-base">
                    Use cash, credit/debit card or save some time and pay right
                    through the app. You’ll collect Stars all ways. {""}
                    <a href="#" className="border-b-[1px] border-b-black">
                      Learn how
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[16px] md:flex-col md:items-center md:ml-5">
                <Image
                  src={getting_3}
                  width={48}
                  height={48}
                  alt="Step 1"
                  className="md:pb-3"
                />
                <div className="md:text-center">
                  <h3 className="font-semibold md:text-lg">
                    Earn Stars, get Rewards
                  </h3>
                  <p className="pt-[18px] text-sm md:text-base">
                    As you earn Stars, you can redeem them for Rewards—like free
                    food, drinks, and more. Start redeeming with as little as 25
                    Stars!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
