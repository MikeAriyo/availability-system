import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Description from "./components/Description";
import Rating from "./components/Rating";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import RestaurantLayout from "./layout";
export default function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <div className="mt-4 border-b pb-6">
          <h1 className="font-bold text-6xl">Milesstone Grill</h1>
        </div>
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
