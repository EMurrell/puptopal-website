import Link from "next/link";

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center px-4 py-8 m-6 tracking-wide text-gray-900 md:flex-row"
    >
      <FadeIn>
        <div className="flex justify-center w-full py-4 md:w-3/4 ">
          <img
            src="/kaarinacircle.png"
            alt="kaarina"
            height={400}
            width={400}
          />
        </div>
      </FadeIn>

      <div className="flex flex-col items-center pb-8 pl-2 pr-12 md:w-1/2">
        <FadeIn>
          <h3 className="py-4 text-2xl font-bold tracking-wider text-green-500 lg:text-3xl font-display">
            ABOUT ME
          </h3>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
            I am a lifetime trainer who grew up in a home that trained Labradors
            for duck trails. When I turned 40, I decided to make this passion a
            reality. I completed a 2-year dog behavior and therapy course with
            ABC Animal Behavior College (the best training facility in North
            America). I graduated with honors and opened my own training
            classes. I am trained for all breeds, as well as specific breed
            behaviors and issues.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
            I believe in Family Training for the real world. I work with
            families in a dog environment, including children, parents,
            roommates, anyone the dog spends their day with. We need our pups to
            listen to our young children with the same respect they would have
            for Mom and Dad. I use positive reinforcement and no punishments.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
