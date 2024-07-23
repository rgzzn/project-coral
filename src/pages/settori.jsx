import React from "react";

import { Nav as Navbar } from "../components/navbar/Navbar";
import { Foot as Footer } from "../components/footer/footer";
import { ContentHover } from "../components/content/content_hover";

const Settori = () => {
  return (
    <div>
      <Navbar />
      <ContentHover />
      <Footer />
    </div>
  );
};

export default Settori;
