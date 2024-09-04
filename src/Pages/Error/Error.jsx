import { Link } from "react-router-dom";
import img from "../../assets/images/error/error.png";
import { IoArrowBack } from "react-icons/io5";

const Error = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex items-center gap-2 mx-auto mt-20 font-rancho font-bold text-3xl text-dark-600">
          <IoArrowBack /> Back to home
        </button>
      </Link>

      <img className="mx-auto" src={img} alt="" />
    </div>
  );
};

export default Error;
