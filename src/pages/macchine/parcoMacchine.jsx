import React from "react";

import Nav from "../../components/navbar/NavbarMacchine";
import { Foot as Footer } from "../../components/footer/footer";

import { Metrologica } from "../../components/macchine/metrologica";
import { Lavorazioni } from "../../components/macchine/lavorazioni";
import { StampaggioLam } from "../../components/macchine/stampaggiolam";

const ParcoMacchine = () => {
  return (
    <div>
      <Nav />
      <Metrologica />
      <Lavorazioni />
      <StampaggioLam />
      <Footer />
    </div>
  );
};

export default ParcoMacchine;
