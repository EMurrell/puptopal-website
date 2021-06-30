import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full py-12 space-x-16 bg-green-400 lg:pt-16 lg:flex-row ">
      <FadeIn>
        <h1 className="flex px-4 pb-0 mt-2 text-5xl font-extrabold text-center lg:-mt-60 font-display text-gray-50 lg:text-left lg:ml-12 md:text-8xl ">
          Dog Training <br /> For Real Life
        </h1>
      </FadeIn>

      <FadeIn>
        <div className="flex pt-6 lg:pt-0">
          <Image
            src="/herodog.png"
            alt="picture of dog"
            height={650}
            width={650}
            priority="true"
          />
        </div>
      </FadeIn>
    </div>
  );
}
