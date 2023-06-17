import Link from "next/link";
export default function RestaurantCard() {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl text-black">Aiāna Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="flex mb-2 text-black">*****</div>
          <p className="ml-2 text-sm text-black">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4 text-black">$$$</p>
            <p className="mr-4 text-black">Mexican</p>
            <p className="mr-4 text-black">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/specific-route">View more information</Link>
        </div>
      </div>
    </div>
  );
}
