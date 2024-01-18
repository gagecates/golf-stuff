"use client";

import React, { useState } from "react";
import Image from "next/image";
import defaultUserImage from "/public/images/default-user.webp";
import Link from "next/link";

type MenuItem = {
  name: string;
  link: string;
};

type Props = {
  width?: number;
};

const UserAvatar = ({ width = 40 }: Props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const menuItems: MenuItem[] = [
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Sign in/Register",
      link: "/",
    },
  ];

  return (
    <div className="mr-6" onClick={() => setDropdown(!dropdown)}>
      <Image
        src={defaultUserImage}
        alt="Logo"
        className="rounded-full bg-white cursor-pointer flex justify-center items-center border-2 p-1 border-black"
        width={width}
        height={width}
      />
      {dropdown && (
        <div className="absolute bg-slate-400 rounded right-10 flex flex-col gap-4 p-4 text-white">
          {menuItems.map((item: MenuItem) => (
            <div
              key={`avatar-menu-${item.name}`}
              className="cursor-pointer hover:text-gray-800"
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
