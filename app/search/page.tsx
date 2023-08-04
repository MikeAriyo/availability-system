import Link from "next/link";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantByCity = async (city: string) => {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
  });
};

export default function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
