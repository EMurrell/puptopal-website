import FadeIn from "./FadeIn";

export default function Header() {
  return (
    <div id="home" className="relative">
      <img
        src="/high5-5.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="picture of dog"
      />
      <div className="relative ">
        <svg
          className="absolute inset-x-0 text-white -bottom-1"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-64">
          <div className="flex flex-col justify-between sm:items-center md:items-start xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <FadeIn>
                <h1 className="mb-6 text-6xl font-bold text-white md:text-7xl font-display ">
                  Dog Training <br />
                  For Real Life
                </h1>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  {" "}
                </p>
                <a
                  href="#services"
                  aria-label="services"
                  className="inline-flex items-center text-xl font-semibold tracking-wider text-white font-display "
                >
                  Learn More
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </FadeIn>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
