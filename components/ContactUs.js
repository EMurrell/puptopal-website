import FadeIn from "./FadeIn";
import Dots from "./Dots";

export default function ContactUs() {
  return (
    <div id="contact">
      <div className="container pt-16 mx-auto "></div>
      <div className="w-full py-16 bg-gray-100 ">
        <div className="container relative mx-auto">
          <div className="absolute top-0 -mt-16">
            <Dots />
          </div>
          <div className="absolute bottom-0 right-0 -mb-16">
            <Dots />
          </div>

          <FadeIn>
            <div className="relative w-11/12 px-10 py-10 mx-auto bg-white sm:px-16">
              <div className="flex items-center justify-between pb-8">
                <div className="items-center xl:flex md:flex lg:flex sm:flex">
                  <h1 className="mb-6 text-2xl font-extrabold text-green-500 font-display xl:text-4xl md:text-center lg:text-center">
                    Get In Touch
                  </h1>

                  <div className="pt-4 xl:pl-32 lg:pl-32 md:pl-6 sm:pl-6 sm:pt-0">
                    <p className="text-lg font-bold text-gray-600 font-display">
                      PHONE
                    </p>
                    <p className="text-base text-gray-600 font-display sm:text-xl">
                      (613) 883-6232
                    </p>
                  </div>
                  <div className="pt-4 xl:pl-32 lg:pl-32 md:pl-6 sm:pl-6 sm:pt-0">
                    <p className="text-lg font-bold text-gray-600 font-display">
                      EMAIL
                    </p>
                    <p className="text-base text-gray-600 font-display sm:text-xl">
                      kaarinaddewan@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
