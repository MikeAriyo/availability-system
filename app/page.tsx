import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany();
  return restaurants;
};
export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
}

// YGcH7fQyiTdXCR4b
// ORM - Object Relational Mapper
