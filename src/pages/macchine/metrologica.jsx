import React from "react";

import Nav from "../../components/navbar/NavbarMacchine";
import { Foot as Footer } from "../../components/footer/footer";
import carosel from "../../components/macchine/carosel";

const Metrologica = () => {
  return (
    <div>
      <Nav />
      <carosel />
      <Footer />
    </div>
  );
};

export default Metrologica;
