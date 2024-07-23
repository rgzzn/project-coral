import React from "react";

import { Nav as Navbar } from "../components/navbar/Navbar";
import { Foot as Footer } from "../components/footer/footer";
import { Sector } from "../components/content/sector";

const Settori = () => {
  return (
    <div>
      <Navbar />
      <Sector />
      <Footer />
    </div>
  );
};

export default Settori;
