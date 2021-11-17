import FadeIn from "./FadeIn";

export default function Header() {
  return (
    <section
      id="home"
      className="relative z-40 pt-32 text-white md:pt-48 lg:pt-12 2xl:pt-20 font-body"
    >
      <img
        src="/high5-5.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="picture of dog"
      />
      <div className="relative ">
        <svg className="absolute inset-x-0 -bottom-1" viewBox="0 0 1160 163">
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-64">
          <div className="flex flex-col justify-between sm:items-center md:items-start xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <FadeIn>
                <h1 className="mb-6 text-6xl font-extrabold md:text-7xl">
                  Dog Training <br />
                  For Real Life.
                </h1>
                <button className="px-6 py-2 mt-4 font-medium text-white transition duration-100 ease-in-out transform bg-green-600 shadow-lg rounded-3xl hover:bg-green-500 hover:scale-105">
                  <a
                    href="#services"
                    aria-label="services"
                    className="inline-flex items-center tracking-wider "
                  >
                    LEARN MORE
                  </a>
                </button>
              </FadeIn>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
