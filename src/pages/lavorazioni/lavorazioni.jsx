import React from "react";
import Nav from "../../components/navbar/NavbarLavorazioni";
import { ContentHover } from "../../components/content/contentHoverLavorazioni";
import { Foot as Footer } from "../../components/footer/footer";

const Lavorazioni = () => {
  return (
    <div>
      <Nav />
      <ContentHover />
      <Footer />
    </div>
  );
};

export default Lavorazioni;
