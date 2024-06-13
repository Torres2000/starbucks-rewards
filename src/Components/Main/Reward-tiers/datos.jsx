import { useState } from "react";
import Image from "next/image";
import datos from "./start";
export default function Datos({ id }) {
  const [value, setValue] = useState(id);

  const resultado = datos;
  const { img, title, description } = resultado[value];

  return (
    <>
      <div className="py-8 md:p-0 md:max-w-[375px] ">
        <Image
          src={img}
          priority
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto md:w-full"
        />
      </div>
      <div className="px-4 md:flex md:flex-col md:items-start md:max-w-[375px] ">
        <h3 className="text-center font-semibold text-lg pb-[18px] md:text-left md:text-2xl">
          {title}
        </h3>
        <p className="text-center text-sm md:text-left md:text-base">
          {description}
        </p>
      </div>
    </>
  );
}
