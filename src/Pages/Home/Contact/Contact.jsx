import { FaCalendarAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      className="bg-dark-700 flex lg:flex-row md:flex-col flex-col
     items-center justify-between lg:py-24 md:py-20 py-12 lg:px-16 md:px-8 px-3 space-y-10 lg:space-y-0  rounded-xl"
    >
      <div className="flex items-center gap-4 text-white mx-auto">
        <div>
          <FaCalendarAlt className="lg:text-4xl md:text-3xl text-4xl" />
        </div>
        <div className="space-y-2">
          <p>We are open monday-friday</p>
          <h1 className="font-bold lg:text-2xl text-xl ">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 text-white  sm:mx-auto">
        <div>
          <MdAddIcCall className="lg:text-4xl md:text-3xl text-4xl" />
        </div>
        <div className="space-y-2">
          <p>Have a question?</p>
          <h1 className="font-bold lg:text-2xl text-xl ">+2546 251 2658</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 text-white  sm:mx-auto">
        <div>
          <FaLocationDot className="lg:text-4xl md:text-3xl text-4xl" />
        </div>
        <div className="space-y-2">
          <p>Need a repair? our address</p>
          <h1 className="font-bold lg:text-2xl text-xl ">
            Liza Street, New York
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
