"use client";
import { Carousel } from "keep-react";
import Image from "next/image";
import datos from "./datosCarousel";
import { useEffect, useState } from "react";

function CarouselComponent({ valor }) {
  const [value, setValue] = useState("defaul");
  const [datosCarousel, setDatosCarousel] = useState();

  useEffect(() => {
    const val = valor.valor;
    setValue(val);
    switch (valor.valor) {
      case "freebies":
        setDatosCarousel(datos.freebies);
        break;
      case "order":
        setDatosCarousel(datos.order);
        break;
      case "faster":
        setDatosCarousel(datos.faster);
        break;
      default:
        break;
    }
  }, [value, valor.valor]);

  // ya se traen los valores correctamente y se almacenan en caousel

  return (
    <>
      <section className="w-full">
        <Carousel>
          <Carousel.Slides>
            {datosCarousel &&
              datosCarousel.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="">
                    <div>
                      <Image src={item.img} alt={item.title} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold my-2">
                        {item.title}
                      </h2>
                      <p>{item.descripcion}</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
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
