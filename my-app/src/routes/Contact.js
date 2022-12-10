import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"
import image2 from "../assets/image2.avif"
;

function Contact() {
  return (
    <>
       <Navbar/>
      <Hero 
      className="hero-mid"
      heroImage={image2}
      title="Contact"
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;