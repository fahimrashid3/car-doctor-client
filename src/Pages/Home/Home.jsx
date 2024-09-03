import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/services";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
