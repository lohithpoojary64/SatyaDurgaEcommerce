import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import leftArrow from "../../../assets/arrow-left.png";

interface NavbarProps {
  url: string;
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ url, path }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  // Explicitly return the JSX content
  return (
    <div className="bg-white h-[60px] w-[100%] flex justify-between items-center px-[15px] lg:hidden">
      <div className="flex justify-between items-center w-[65%] lg:w-[58%]">
        <Image
          src={leftArrow}
          alt="arrow-Image"
          height={30}
          width={30}
          onClick={handleClick} // Use handleClick directly here.
        />
        <h1 className="font-bold text-lg">{url}</h1>
      </div>
    </div>
  );
};

export default Navbar;
