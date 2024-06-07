import heroMobile from "../../../img/hero/hero-mobile-2021.webp";

export default function Inicio() {
  return (
    <>
      <section className="heroMobile pb-10 h-[75vh] sm:h-screen">
        <div className="flex flex-col items-center px-6 py-7">
          <h2 className="text-[26px] font-bold text-center">
            FREE COFFEE
            <br />
            IS A TAP AWAY
          </h2>
          <div className="pt-3">
            <p className="text-sm">Join now to start earning Rewards.</p>
          </div>
          <div className="pt-10">
            <a
              href="#"
              className="text-white font-semibold text-sm bg-[#00754A] px-4 py-2 rounded-full hover:bg-[#00754ae6]"
            >
              Join in the app
            </a>
            <div className="pt-5 text-center">
              <a href="#" className=" border-b-black border ">
                Or join online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
