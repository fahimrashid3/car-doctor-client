import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import imgBanner from "../../assets/images/checkout/checkout.png";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

// import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const service = useLoaderData();

  const { _id, title, img, description, facility, price } = service;
  return (
    <div>
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
      <div className="grid grid-cols-4 lg:my-20 md:my-12 my-8">
        <div className="col-span-3 space-y-10  pr-10">
          <img src={img} className="w-full " alt="" />
          <h1 className="font-bold text-4xl">{title}</h1>
          <p>{description}</p>
          <div className="grid grid-cols-2 justify-center gap-5">
            {facility.map((singleFacility) => (
              <div
                key={_id}
                className="card bg-base-100 shadow-lg  hover:shadow-2xl hover:shadow-red-600 shadow-red-600 py-10"
              >
                <div className="card-body">
                  <h2 className="card-title">{singleFacility.name}</h2>
                  <p>{singleFacility.details}</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            ))}
          </div>
          <p>{description}</p>
          <h1 className="font-bold text-4xl">3 Simple Steps to Process</h1>
          <p>{description}</p>
          <div className="flex text-center gap-10 justify-center">
            <div className="border p-5 rounded-lg space-y-6 max-w-56 hover:shadow-lg hover:shadow-red-500">
              <div className="bg bg-red-200 rounded-full p-2 max-w-14 mx-auto">
                <div className="bg-red-500 rounded-full p-2 text-white font-bold text-center">
                  <p>1</p>
                </div>
              </div>
              <p className="font-bold text-xl">Step One</p>
              <p>It uses a dictionary of over 200 .</p>
            </div>
            <div className="border p-5 rounded-lg space-y-6 max-w-56 hover:shadow-lg hover:shadow-red-500">
              <div className="bg bg-red-200 rounded-full p-2 max-w-14 mx-auto">
                <div className="bg-red-500 rounded-full p-2 text-white font-bold text-center">
                  <p>2</p>
                </div>
              </div>
              <p className="font-bold text-xl">Step Two</p>
              <p>It uses a dictionary of over 200 .</p>
            </div>
            <div className="border p-5 rounded-lg space-y-6 max-w-56 hover:shadow-lg hover:shadow-red-500">
              <div className="bg bg-red-200 rounded-full p-2 max-w-14 mx-auto">
                <div className="bg-red-500 rounded-full p-2 text-white font-bold text-center">
                  <p>3</p>
                </div>
              </div>
              <p className="font-bold text-xl">Step Three</p>
              <p>It uses a dictionary of over 200 .</p>
            </div>
          </div>
          <img src={img} className="w-full pr-10" alt="" />
        </div>
        <div className="col-span-1 space-y-10">
          <div className="bg-dark-700 text-white rounded-lg px-10 py-8 space-y-8">
            <p className="font-bold text-xl text-center">Download</p>
            <div className="flex items-center gap-2 justify-between">
              <div className="font-bold  text-4xl">
                <MdOutlineDocumentScanner />
              </div>
              <div>
                <p className="font-semibold text-lg">Our Brochure</p>
                <p>Download</p>
              </div>
              <div className="bg-red-500 text-2xl font-thin p-3 rounded-sm">
                <FaArrowRight />
              </div>
            </div>
            <div className="flex items-center justify-between space-y-4">
              <div className="font-bold  text-4xl">
                <MdOutlineDocumentScanner />
              </div>
              <div>
                <p className="font-semibold text-lg">Company details</p>
                <p>Download</p>
              </div>
              <div className="bg-red-500 text-2xl font-thin p-3 rounded-sm">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-dark-700 text-white rounded-lg px-10 py-8 space-y-8">
            <img src={logo} className="mx-auto" alt="" />
            <p className="font-bold text-xl text-center">
              Need Help? We Are Here To Help You
            </p>
            <div className="relative">
              <div className="bg-white text-black rounded-lg p-4 text-center pb-10">
                <p className="font-bold text-xl">
                  <span className="text-red-500">Car Doctor</span> Special
                </p>
                <p className="font-bold">
                  Save up to
                  <span className="text-red-500">60% off</span>
                </p>
              </div>
              <div className="bg-red-500 absolute -bottom-5 left-16 font-semibold text-lg p-2 rounded-lg flex justify-center mx-auto text-center">
                Get A Quote
              </div>
            </div>
          </div>
          <h1 className="font-bold text-4xl">Price: ${price}</h1>
          <Link to={`/checkOut/${_id}`}>
            <button className="btn btn-error font-semibold text-sm text-white w-full">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
