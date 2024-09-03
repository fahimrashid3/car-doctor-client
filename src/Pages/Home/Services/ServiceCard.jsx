import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-52 w-80" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>

        <div className="flex">
          <p className="font-semibold text-xl text-red-500">{price}</p>
          <p className="font-semibold text-xl text-red-500">
            <Link>
              <FaArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
