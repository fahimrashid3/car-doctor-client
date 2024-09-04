import { useLoaderData } from "react-router-dom";
import imgBanner from "../../assets/images/checkout/checkout.png";
import Navbar from "../Shared/Navbar/Navbar";

const CheckOut = () => {
  const service = useLoaderData();

  const { title } = service;
  return (
    <div className="space-y-10 mb-20">
      <Navbar></Navbar>
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={imgBanner} className="w-full" />

        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full rounded-lg">
          <div className="text-white space-y-7 pl-20 ">
            <h1 className="text-4xl font-bold">Service Details </h1>
          </div>
        </div>
        <div className="text-white text-xl font-medium absolute bg-red-500 text-center bottom-0 p-2 rounded-t-box ml-[40%]">
          <p>Home/Service Details</p>
        </div>
      </div>
      <p className="font-bold text-4xl text-center"> {title}</p>

      <div className="bg-dark-200 p-20 rounded-xl">
        <form className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="email"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              name="yourMessage"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-error">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
