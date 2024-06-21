"use client";
import Image from "next/image";
import datos from "./datos";
export default function endlessExtras() {
  const datosInfo = datos;
  console.log(datosInfo);
  datosInfo.map((item) => console.log(item.img));

  return (
    <>
      <section>
        <div className="max-w-[1440px] m-auto py-8 px-4 md:py-16 md:px-6 lg:px-10">
          <div>
            <div className="flex flex-col items-center ">
              <h2 className="font-semibold text-xl">Endless Extras</h2>
              <p className="text-center pt-3 text-sm">
                Joining Starbucks® Rewards means unlocking access to exclusive
                benefits. Say hello to easy ordering, tasty Rewards and—yes,
                free coffee.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[44px] pt-12 ">
            {datosInfo.map((item, index) => (
              <div key={index} className="classGrid">
                <div className=" mr-4">
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    className=""
                    width={112}
                    height={112}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{item.titulo}</h3>
                  <p className="pt-5 text-sm">{item.parrafo}</p>
                  <button className="my-3 text-sm border-b-[1px] text-[#006241] border-[#006241]">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
