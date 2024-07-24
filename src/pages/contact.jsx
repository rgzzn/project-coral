import React from "react";

import Nav from "../components/navbar/NavbarContatti";
import { Foot as Footer } from "../components/footer/footer";
import ContactForm from "../components/forms/contactForm";

const Contact = () => {
  return (
    <div>
      <Nav />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
