import Link from "next/link";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 bg-green-500 font-display">
      <h3 className=" text-gray-50">
        © {getCurrentYear()} Pup To Pal All Rights Reserved
      </h3>
      <p className="text-center text-white">
        Website powered by
        <a
          className="italic hover:text-neutral-200"
          href="https://trailbridgeweb.com"
        >
          {" "}
          Trailbridge Web
        </a>
      </p>
    </footer>
  );
}
