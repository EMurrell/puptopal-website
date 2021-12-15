import FadeIn from "./FadeIn";
import Dots from "./Dots";

export default function ContactUs() {
  return (
    <div id="contact">
      <div className="container pt-16 mx-auto font-semibold tracking-wide text-gray-900 font-body"></div>
      <div className="w-full py-16 bg-gray-100 ">
        <div className="container relative mx-auto">
          <div className="absolute top-0 -mt-16">
            <Dots />
          </div>
          <div className="absolute bottom-0 right-0 -mb-16">
            <Dots />
          </div>

          <div className="relative w-11/12 p-20 mx-auto bg-white sm:px-16">
            <div className="flex items-center pb-8">
              <div className="flex flex-col md:flex-row">
                <FadeIn>
                  <h1 className="mb-4 text-2xl font-extrabold text-green-600 lg:text-4xl md:text-center md:text-3xl">
                    Get In Touch
                  </h1>
                </FadeIn>

                <div className="py-4 lg:pl-32 xl:pl-44 md:pl-6 sm:pl-6 ">
                  <FadeIn>
                    <p className="text-lg font-bold">PHONE</p>
                    <p className="text-base ">(613) 883-6232</p>
                    <button className="px-6 py-2 mt-4 font-semibold text-white transition duration-100 ease-in-out transform bg-green-600 rounded-sm shadow-lg hover:bg-green-500 hover:scale-105">
                      <a href="tel:+1-613-883-6232">CALL NOW</a>
                    </button>
                  </FadeIn>
                </div>
                <div className="py-4 xl:pl-44 lg:pl-32 md:pl-6 sm:pl-6 ">
                  <FadeIn>
                    <p className="text-lg font-bold">EMAIL</p>
                    <p className="text-base ">kaarinaddewan@gmail.com</p>
                    <button className="px-6 py-2 mt-4 font-semibold text-white transition duration-100 ease-in-out transform bg-green-600 rounded-sm shadow-lg hover:bg-green-500 hover:scale-105">
                      <a href="mailto:kaarinaddewan@gmail.com">EMAIL NOW</a>
                    </button>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
