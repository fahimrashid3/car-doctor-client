import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="lg:mt-20 md:mt-10 mt-8">
      <div className="w-1/2 mx-auto space-y-4 text-center">
        <p className="font-bold text-red-500 text-xl">Services</p>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p className="text-lg">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="lg:mt-16 md:mt-8 mt-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="lg:my-16 md:my-10 my-6 text-center">
          <button className="btn btn-outline btn-error font-semibold text-lg">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
