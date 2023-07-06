"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import logoBlack from "@/public/Images/yourphotos-logo-black.png";
import logoWhite from "@/public/Images/yourphotos-logo-white.png";
import placeholder from "@/public/Images/placeholder-img.jpg";
import ThemeChange from "./ThemeChange";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className="border-b-[.5px] border-gray-200 dark:border-gray-600 h-24 flex items-center justify-between px-1 md:px-4 lg:px-8 bg-[#FEFAF5] dark:bg-black">
      <Link href="/">
        {theme === "light" ? (
          <Image
            src={logoBlack}
            alt="your photos logo black"
            width={150}
            height={40}
            priority
            className="lg:w-52 xl:64"
          />
        ) : (
          <Image
            src={logoWhite}
            alt="your photos logo white"
            width={150}
            height={40}
            className="lg:w-52 xl:64"
          />
        )}
      </Link>
      <div className="flex justify-center gap-8 w-32 items-center">
        <ThemeChange />
        <div>
          <Image
            src={placeholder}
            alt="avatar"
            width={30}
            height={30}
            className="object-cover rounded-full lg:w-9 xl:16"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
