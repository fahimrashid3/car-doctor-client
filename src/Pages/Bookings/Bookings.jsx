import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import BookingRow from "./BookingRow";
import imgBanner from "../../assets/images/checkout/checkout.png";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={imgBanner} className="w-full" />

        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-lg">
          <div className="text-white space-y-7 pl-20 ">
            <h1 className="text-4xl font-bold">Manage Order </h1>
          </div>
        </div>
      </div>

      <div className="space-y-5 lg:my-20 md:my-16 my-10">
        {bookings.map((booking) => (
          <BookingRow key={booking._id} booking={booking}></BookingRow>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
