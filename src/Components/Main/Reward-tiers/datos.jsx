import { useState } from "react";
import Image from "next/image";
import datos from "./start";
export default function Datos({ id }) {
  const [value, setValue] = useState(id);

  const resultado = datos;
  const { img, title, description } = resultado[value];

  return (
    <>
      <div className="py-8">
        <Image
          src={img}
          priority
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top  -bottom-10 inset-x-0  rounded-xl mx-auto"
        />
      </div>
      <div className="px-4">
        <h3 className="text-center font-semibold text-lg pb-[18px]">{title}</h3>
        <p className="text-center text-sm">{description}</p>
      </div>
    </>
  );
}
