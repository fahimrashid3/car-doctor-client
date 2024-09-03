import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 lg:mt-20 md:mt-10 mt-6 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:flex-1 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-10 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:flex-1">
          <p className="font-bold text-red-500 text-xl">About Us</p>
          <h1 className="text-5xl font-bold lg:w-2/3">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 w-[80%]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6 w-[80%]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
