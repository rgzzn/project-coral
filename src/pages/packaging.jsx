import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import packaging_1 from "../assets/settori/packaging/packaging_1.jpg";

import { Comega } from "../components/content/comega";
import Nav from "../components/navbar/NavbarSettori";
import { Foot as Footer } from "../components/footer/footer";

const Packaging = () => {
  return (
    <div>
      <Nav />
      <div>
        {/* contenitore per il settore */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                  <br className="hidden md:block" />
                  Settore{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-orange-accent-100" />
                    <span className="relative inline-block text-orange-accent-400">
                      Packaging
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  Per molte aziende leader di mercato realizziamo componenti
                  meccanici di alta precisione e montiamo gruppi a disegno per
                  impianti packaging. Realizziamo gruppi utilizzando diversi
                  materiali: plastica, aisi 304, alluminio, acciaio. I gruppi a
                  distinta base sono completi di parte elettrica e pneumatica e
                  collaudati e verificati a commessa.
                </p>
              </div>
              <div className="grid space-y-3 sm:gap-1 sm:grid-cols-1 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Realizzazione di componenti meccanici di alta precisione
                  </li>
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Montaggio gruppi a disegno per impianti di packaging
                  </li>
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Parte elettronica e pneumatica collaudata e verificata
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={packaging_1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Comega />
      <Footer />
    </div>
  );
};

export default Packaging;
