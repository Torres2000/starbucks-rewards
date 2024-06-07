export default function Header() {
  return (
    <>
      <section className=" bg-teal-900  w-full sticky top-0">
        <div className="max-w-[1440px] flex items-center justify-between px-4 h-[50px] md:pl-24 lg:pl-[8.5rem] 2xl:p-0 2xl:m-auto">
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase xl:text-sm">
              Starbucks® Rewards
            </h3>
          </div>
          <div className="md:hidden">
            <a
              href="#"
              className="text-white font-bold text-xs border tracking-widest border-white rounded-full p-2"
            >
              Join in the app
            </a>
          </div>
        </div>
      </section>

      <section className="h-screen"></section>
    </>
  );
}
