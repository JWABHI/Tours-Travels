import "./ContactFormStyle.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Send Message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" row="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};
 export default ContactForm