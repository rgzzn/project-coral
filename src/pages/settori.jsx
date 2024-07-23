import React from "react";

import { Nav as Navbar } from "../components/navbar/Navbar";
import { Foot as Footer } from "../components/footer/footer";
import { Content_hover } from "../components/content/content_hover";

const Settori = () => {
  return (
    <div>
      <Navbar />
      <Content_hover />
      <Footer />
    </div>
  );
};

export default Settori;
