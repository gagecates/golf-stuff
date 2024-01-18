"use client";

import React, { ChangeEvent, useState } from "react";
import UserAvatar from "@/components/UserAvatar";
import Image from "next/image";
import pgaLogo from "/public/images/pga-logo.webp";
import nflLogo from "/public/images/nfl-logo.webp";
import nbaLogo from "/public/images/nba-logo.webp";

export default function Profile() {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const sportOptions = [
    {
      name: "PGA",
      image: pgaLogo,
    },
    {
      name: "NFL",
      image: nflLogo,
    },
    {
      name: "NBA",
      image: nbaLogo,
    },
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    const option = event.target.value;
    console.log(option);
    console.log(selectedSports);

    if (selectedSports.includes(option)) {
      setSelectedSports(selectedSports.filter((sport) => sport !== option));
    } else {
      setSelectedSports([...selectedSports, option]);
    }
  };

  return (
    <main className="max-w-3xl w-full flex flex-col items-center py-8">
      <div>Profile</div>
      <div className="flex justify-between mt-10 w-full px-10 items-center">
        <div>Choose what sports you would like to keep up with!</div>
        <UserAvatar width={100} />
      </div>
      <div className="rounded-xl h-0.5 bg-gray-500 w-full my-10" />
      <div className="flex gap-10">
        {sportOptions.map((sport: any) => (
          <div key={sport.name} className="flex flex-col justify-end gap-4">
            <Image
              src={sport.image}
              alt={sport.name}
              className="cursor-pointer rounded h-20"
              width={70}
              height={70}
            />
            <input
              type="checkbox"
              value={sport.name}
              className="form-radio h-6 justify-end"
              checked={selectedSports.includes(sport.name)}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
