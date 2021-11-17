import Link from "next/link";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="flex items-center justify-center w-full h-24 bg-green-600">
      <h3 className=" text-gray-50 font-display">
        © {getCurrentYear()} Pup To Pal
        <br />
        All Rights Reserved
      </h3>
    </footer>
  );
}
