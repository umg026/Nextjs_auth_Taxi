import Booking from "./components/bookings/Booking";
import Map from "./components/maps/Map";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 pt-4">
      <div className="h-screen">
        <Booking />
      </div>

      <div className="col-span-2 bg-blue-300 order-first md:order-last">
        <Map />
      </div>
    </div>
  );
}