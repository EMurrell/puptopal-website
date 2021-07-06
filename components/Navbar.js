import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  // { name: "Home", href: "#", current: true },
  { name: "Services", href: "#services", current: false },
  { name: "Testimonials", href: "#testimonials", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-green-400 ">
      {({ open }) => (
        <>
          <div className="p-2 mx-auto ml-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-10">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md hover:text-white focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 pt-2 sm:items-stretch sm:justify-start">
                <div className="flex items-center ">
                  <a href="#">
                    <img
                      className="block w-auto h-11 lg:hidden"
                      src="/wordmark1.png"
                      alt="pup to pal logo"
                    />
                    <img
                      className="hidden w-auto h-11 lg:block"
                      src="/wordmark1.png"
                      alt="pup to pal logo"
                    />
                  </a>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-green-400 text-white"
                            : "text-white hover:bg-green-300 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-bold tracking-wide"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <p className="hidden mt-1 font-semibold text-right text-white md:block text-bold">
                (613) 883-6232 <br />
                kaarinaddewan@gmail.com
              </p>
            </div>
            <p className="text-sm font-semibold text-center text-white md:hidden">
              (613) 883-6232
              <br />
              kaarinaddewan@gmail.com
            </p>
          </div>
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-50 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-50 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    className="block"
                    onClick={() => (open = false)}
                  >
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-green-300 text-white"
                          : "text-gray-100 hover:bg-green-300 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-semibold tracking-wide"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
