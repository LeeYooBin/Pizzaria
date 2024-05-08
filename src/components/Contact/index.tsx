import Contacts from "./contacts";
import Form from "./form";

const Contact = () => (
  <section className="py-12 md:py-20 md:px-14" id="contact">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <Form />
        <Contacts />
      </div>
    </div>
  </section>
);

export default Contact;
