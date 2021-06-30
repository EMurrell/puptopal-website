import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center px-4 py-4 m-8 md:flex-row">
        <div className="flex justify-center w-full py-4 md:w-1/2 ">
          <Image
            src="/kaarinacircle.png"
            alt="kaarina"
            height={400}
            width={400}
          />
        </div>

        <div className="flex flex-col items-center px-2 pb-8 md:w-1/2">
          <h3 className="py-4 text-xl text-left text-gray-500 lg:text-2xl font-display">
            About Me
          </h3>
          <p className="font-serif text-base text-gray-500 lg:text-xl">
            I am a lifetime trainer who grew up in a home that trained Labradors
            for duck trails. When I turned 40, I decided to make this passion a
            reality. I completed a 2-year dog behavior and therapy course with
            ABC Animal Behavior College (the best training facility in North
            America). I graduated with honors and opened my own training
            classes. I am trained for all breeds, as well as specific breed
            behaviors and issues.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}