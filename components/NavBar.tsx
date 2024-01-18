"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import UserAvatar from "./UserAvatar";

const menuItems = [
  {
    name: "College Football",
    navigateTo: "/",
  },
  {
    name: "Pro Football",
    navigateTo: "/football",
  },
  {
    name: "Basketball",
    navigateTo: "/basketball",
  },
  {
    name: "Baseball",
    navigateTo: "/baseball",
  },
  {
    name: "Hockey",
    navigateTo: "/hockey",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="h-16 bg-black mx-auto">
      {/* Menu and Logo */}
      <div className="flex items-center justify-between h-full ml-7 mr-7">
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={25} />
        </div>
        <Image
          src="/images/sports-n-stuff.png"
          alt="Logo"
          className="cursor-pointer ml-6"
          width={100}
          height={20}
        />
        {/* disabled for now until auth and everything is set up */}
        {/* <UserAvatar /> */}
        <div className="w-16"></div>
      </div>
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform top-0 left-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 mt-16`}
      >
        <div className="px-2 py-2">
          {menuItems.map((item: any) => (
            <a
              href={item.navigateTo}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400"
              key={`menu-item-${item.name}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="bg-black bg-opacity-50 fixed inset-0 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
