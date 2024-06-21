"use client";
import { Carousel } from "keep-react";

import datos from "./datosCarousel";
import { useEffect, useState } from "react";

function CarouselComponent(valor) {

  const [value, setValue] = useState("faster");
const vl = valor.valor;
console.log(vl);
  useEffect(()=>{
    setValue(valor.valor)
  },[valor])

  const datosp = datos;

  const datosCarousel = datosp[value];
  console.log(datosCarousel);
  


  return (
    <>
      <section className="w-72">
        <Carousel>
          <Carousel.Slides>
            <Carousel.Item>
              <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
                <h2 className="text-heading-1 font-medium text-metal-900">1</h2>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
                <h2 className="text-heading-1 font-medium text-metal-900">2</h2>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
                <h2 className="text-heading-1 font-medium text-metal-900">3</h2>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
                <h2 className="text-heading-1 font-medium text-metal-900">4</h2>
              </div>
            </Carousel.Item>
          </Carousel.Slides>
          <Carousel.Control>
            <Carousel.Buttons>
              <Carousel.PrevButton />
              <Carousel.NextButton />
            </Carousel.Buttons>
            <Carousel.Indicators />
          </Carousel.Control>
        </Carousel>
      </section>
    </>
  );
}

export default CarouselComponent;
