import React from "react";

import { Foot as Footer } from "../components/footer/footer";
import { Header } from "../components/header/Header";
import { Motto } from "../components/motto/Motto";
import { Content } from "../components/content/content";
import { Statistic } from "../components/content/Statistic";
import { Step } from "../components/content/keyPower";
import { ComegaOrange } from "../components/content/comega_orange";
import Nav from "../components/navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Motto />
      <ComegaOrange />
      <Content />
      <Statistic />
      <Step />
      <Footer />
    </div>
  );
};

export default Homepage;
