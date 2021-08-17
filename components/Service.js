import { CheckCircleIcon } from "@heroicons/react/outline";
import FadeIn from "./FadeIn";

const features = [
  {
    name: "Basic Commands",
    description:
      "The pup-essentials. Sit, Stay, Lay-down, Heel, Wait, Come, Go-to-spot.",
    icon: CheckCircleIcon,
  },
  {
    name: "Leash Manners",
    description:
      "An important skill to teach, one you'll value every time you take your dog for a walk.",
    icon: CheckCircleIcon,
  },

  {
    name: "Jumping Up",
    description:
      "An undesirable natural canine behavior that is annoying from a human point of view. Let's teach your dog to greet people appropriately.",
    icon: CheckCircleIcon,
  },
  {
    name: "Crate Training",
    description:
      "Create positive associations with the crate, while teaching your dog responsibility and calming anxiety.",
    icon: CheckCircleIcon,
  },
  {
    name: "Positive Reinforcement",
    description:
      "No punishments: Trust is essential to a long and happy relationship.",
    icon: CheckCircleIcon,
  },
  {
    name: "Piece Of Mind",
    description:
      "If we have not accomplished all we have set out to do by the end of our training, I will offer a complimentary class to address those issues.",
    icon: CheckCircleIcon,
  },
];

export default function Service() {
  return (
    <div id="services" className="py-16 my-6 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="mt-2 text-2xl font-bold leading-8 text-green-500 xl:text-3xl font-display ">
              PUP TO PAL - HERE TO HELP
            </p>

            <p className="max-w-2xl mt-4 text-lg text-gray-600 lg:mx-auto font-display">
              Communication is key to any healthy relationship. Your dog wants
              to listen. We can help them understand.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-green-500 rounded-md">
                      <feature.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-600">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
