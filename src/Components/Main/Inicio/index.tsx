export default function Inicio() {
  return (
    <>
      <section className="fondoInicio pb-10 h-[76vh] sm:h-screen md:h-[42vh] md:flex md:bg-bottom md:p-0 md:mb-10 lg:h-[89vh] xl:h-[100vh] 2xl:h-[80vh]">
        <div className="  flex flex-col items-center px-6 py-7 md:justify-center md:items-start md:max-w-[400px] lg:px-10 lg:min-w-[48%] 2xl:m-auto 2xl:w-full 2xl:max-w-[1440px] 2xl:p-0">
          <h2 className="text-[26px] font-bold text-center md:text-left md:text-[32px]">
            FREE COFFEE
            <br />
            IS A TAP AWAY
          </h2>
          <div className="pt-3">
            <p className="text-sm md:text-lg">
              Join now to start earning Rewards.
            </p>
          </div>
          <div className="pt-10">
            <a
              href="#"
              className=" text-white font-semibold text-sm bg-[#00754A] px-4 py-2 rounded-full hover:bg-[#00754ae6] md:hidden"
            >
              Join in the app
            </a>
            <a
              href="#"
              className="hidden md:inline text-white font-semibold text-sm bg-[#00754A] px-4 py-2 rounded-full hover:bg-[#00754ae6]"
            >
              Join now
            </a>
            <div className="pt-5 text-center  md:text-left">
              <a href="#" className=" border-b-black border md:hidden">
                Or join online
              </a>
              <span className="hidden md:inline md:text-lg">
                Or{" "}
                <a href="#" className="hidden border-b-black border md:inline">
                  join in the app
                </a>{" "}
                for the bets experience
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
