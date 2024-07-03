import Links from "./links";
import Redes from "./redes";
import Privacidad from "./privacidad";
import { AccordionComponent } from "./acordeon";

export default function Footer() {
  return (
    <>
      <footer className="pt-12 pb-20">
        <nav className="max-w-[1440px] m-auto px-4 md:px-6  lg:px-10  2xl:px-0">
          <AccordionComponent />
          <Links />
          <hr className="pt-8" />
          <Redes />
          <Privacidad />
        </nav>
      </footer>
    </>
  );
}
