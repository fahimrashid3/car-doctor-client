import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import BookingRow from "./BookingRow";
import imgBanner from "../../assets/images/checkout/checkout.png";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  const handelDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handelStatusChange = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ statusbar: "confirm" }),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // console.log("data updated successfully");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
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
          <BookingRow
            key={booking._id}
            booking={booking}
            handelDeleteOrder={handelDeleteOrder}
            handelStatusChange={handelStatusChange}
          ></BookingRow>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
