import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import elettrodomestico_1 from "../assets/settori/elettromestico/eleddromestico_1.jpg";
import elettrodomestico_2 from "../assets/settori/elettromestico/eleddromestico_2.jpg";
import elettrodomestico_3 from "../assets/settori/elettromestico/eleddromestico_3.jpg";
import elettrodomestico_4 from "../assets/settori/elettromestico/eleddromestico_4.jpg";
import elettrodomestico_5 from "../assets/settori/elettromestico/eleddromestico_5.jpg";
import elettrodomestico_6 from "../assets/settori/elettromestico/eleddromestico_6.jpg";
import elettrodomestico_7 from "../assets/settori/elettromestico/eleddromestico_7.jpg";
import elettrodomestico_8 from "../assets/settori/elettromestico/eleddromestico_8.jpg";

import { Nav as Navbar } from "../components/navbar/Navbar";
import { Foot as Footer } from "../components/footer/footer";

const elettrodomestico = () => {
  return (
    <div>
      <Navbar />
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
                      Elettrodomestico
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  Bipres è storicamente legata alla produzione di
                  componentistica per l’elettrodomestico, in particolare forni
                  ma anche reparto del bianco. Negli ultimi anni la produzione
                  si è spostata sull’alto di gamma estetico (domino hob) in
                  acciaio satinato e sulle protezioni inferiori (lamiera
                  smaltabile), su cui viene montata la componentistica elettrica
                  e gas per il funzionamento del forno. Abbiamo tecnologia per
                  produrre grandi serie da milioni di pezzi/anno fino ad
                  arrivare a prototipi di un solo pezzo per verificare
                  fattibilità in fase di pre-produzione.
                </p>
              </div>
              <div className="grid space-y-3 sm:gap-1 sm:grid-cols-1 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Produzione di componentistica per l’elettrodomestico
                  </li>
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Alto di gamma estetico in acciaio satinato e protezioni
                    inferiori
                  </li>
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Tecnologia per produrre grandi serie da milioni di
                    pezzi/anno
                  </li>
                </ul>
                {/* <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Flipboard curmudgeon
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Storage shed
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Satoshi Nakamoto
                  </li>
                </ul> */}
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={elettrodomestico_4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* contenitore immagini */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_1}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_2}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_3}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_5}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_6}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_7}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={elettrodomestico_8}
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default elettrodomestico;
