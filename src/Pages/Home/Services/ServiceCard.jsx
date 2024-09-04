import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types"; // ES6

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-52 w-80" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl text-red-500">{price}</p>
          <Link to={`/services/${_id}`}>
            <div className="hover:bg-red-500 bg-dark-200 hover:text-white text-red-500 text-right text-2xl p-3 rounded-full ">
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
