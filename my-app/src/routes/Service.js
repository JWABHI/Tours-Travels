import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image3 from "../assets/image3.avif"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>  <Navbar/>
    <Hero 
    className="hero-mid"
    heroImage={image3}
    title="Service"
    btnClass="hide"
    />
    <Trip/>
     <Footer/> 
    </>
  );
}

export default Service;