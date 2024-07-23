import React from "react";

import Nav from "../components/navbar/NavbarSettori";
import { Foot as Footer } from "../components/footer/footer";
import { ContentHover } from "../components/content/content_hover";

const Settori = () => {
  return (
    <div>
      <Nav />
      <ContentHover />
      <Footer />
    </div>
  );
};

export default Settori;
