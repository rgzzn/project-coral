import React from "react";

import { Nav as Navbar } from "../components/navbar/Navbar";
import { Foot as Footer } from "../components/footer/footer";
import { Header } from "../components/header/Header";
import { Motto } from "../components/motto/Motto";
import { Content } from "../components/content/content";
import { Statistic } from "../components/content/Statistic";
import { Step } from "../components/content/keyPower";
import { ComegaOrange } from "../components/content/comega_orange";

const Homepage = () => {
  return (
    <div>
      <Navbar />
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
