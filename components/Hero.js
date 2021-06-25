import Image from "next/image";
import { Transition } from "@headlessui/react";

export default function Hero({ isShowing }) {
  return (
    <div className="flex flex-col justify-center min-w-full pb-10 space-x-16 bg-green-400 lg:flex-row">
      <div>
        <Transition
          appear={true}
          show={true}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <h1 className="flex self-center px-4 pb-0 mx-6 mt-6 ml-8 text-6xl font-extrabold tracking-tight text-white md:mt-24 justify-self-center md:text-8xl ">
            Dog Training <br /> For Real Life
          </h1>
        </Transition>
      </div>

      <div className="flex mt-2">
        <Image src="/dog4.png" alt="picture of dog" height={900} width={750} />
      </div>
    </div>
  );
}
