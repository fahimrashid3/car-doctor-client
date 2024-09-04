import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end mr-5 gap-5 ">
          <a href="#slide6" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide2" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
          <div className="text-white space-y-7 pl-20 w-1/2 ">
            <h1 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error font-semibold text-lg text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error font-semibold text-lg hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end mr-5 gap-5">
          <a href="#slide1" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide3" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
          <div className="text-white space-y-7 pl-20 w-1/2 ">
            <h1 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error font-semibold text-lg text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error font-semibold text-lg hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end mr-5 gap-5">
          <a href="#slide2" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide4" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
          <div className="text-white space-y-7 pl-20 w-1/2 ">
            <h1 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error font-semibold text-lg text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error font-semibold text-lg hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end mr-5 gap-5">
          <a href="#slide3" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide5" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
          <div className="text-white space-y-7 pl-20 w-1/2 ">
            <h1 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error font-semibold text-lg text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error font-semibold text-lg hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end mr-5 gap-5">
          <a href="#slide4" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide6" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
          <div className="text-white space-y-7 pl-20 w-1/2 ">
            <h1 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error font-semibold text-lg text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error font-semibold text-lg hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end mr-5 gap-5">
          <a href="#slide5" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide1" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
        <div className="absolute left-0 top-0 flex items-center mr-5 gap-5 bg-gradient-to-r from-[#151515] to-[#15151500] h-full">
          <div className="text-white space-y-7 pl-20 w-1/2 ">
            <h1 className="text-6xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error font-semibold text-lg text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-error font-semibold text-lg hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
