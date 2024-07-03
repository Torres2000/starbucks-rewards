import Links from "./links";
import Redes from "./redes";
import Privacidad from "./privacidad";
export default function Footer() {
  return (
    <>
      <footer className="pt-12">
        <nav className="max-w-[1440px] m-auto px-4 md:px-6  lg:px-10  2xl:px-0">
          <Links />
          <hr className="pt-8" />
          <Redes />
          <Privacidad />
        </nav>
      </footer>
    </>
  );
}
