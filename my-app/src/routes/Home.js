import Destination from "../components/Destination"
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import image1 from "../assets/image1.avif"



function Home() {
  return (
    <>
      <Navbar/>
      <Hero 
      className=".hero"
      heroImage={image1}
      title="Story Of Your Journey"
      text="Choose Your Favourite Destination."
      buttonText= "Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;