import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/services";
import Navbar from "../Shared/Navbar/Navbar";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;
