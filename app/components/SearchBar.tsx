"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const router = useRouter();
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {/* demo programatic navigation with use router */}
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          if (location === "") return;
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      > 
        Let's go
      </button>
    </div>
  );
}
