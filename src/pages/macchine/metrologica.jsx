import React from "react";

import metrologica_1 from "../../assets/macchine/metrologica/metrologica_1.jpg";
import metrologica_2 from "../../assets/macchine/metrologica/metrologica_2.jpg";
import metrologica_3 from "../../assets/macchine/metrologica/metrologica_3.jpg";
import metrologica_4 from "../../assets/macchine/metrologica/metrologica_4.jpg";
import metrologica_5 from "../../assets/macchine/metrologica/metrologica_5.jpg";
import metrologica_6 from "../../assets/macchine/metrologica/metrologica_6.jpg";
import metrologica_7 from "../../assets/macchine/metrologica/metrologica_7.jpg";

import { Feature } from "../../components/features/LavMacchine";
import Nav from "../../components/navbar/NavbarMacchine";
import { Foot as Footer } from "../../components/footer/footer";

const Metrologica = () => {
  return (
    <div>
      <Nav />
      {/* breadcrumb */}
      <nav
        class="flex px-5 py-3 text-gray-700 border rounded-lg"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <a
              href="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-accent-400 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="/lavorazioni"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-orange-accent-400 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Parco Macchine
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Sala Metrologica
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        {/* contenitore per il settore */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                  <br className="hidden md:block" />
                  Sala{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-orange-accent-100" />
                    <span className="relative inline-block text-orange-accent-400">
                      Metrologica
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  A partire dall'autunno 2017, lo stabilimento di Portico si è
                  dotato di una nuova sala di misura climatica all'avanguardia.
                  Realizzata appositamente all'interno di una camera in
                  muratura, la sala è equipaggiata con una macchina di misura
                  tridimensionale Hexagon Global Performance di ultima
                  generazione, con corse X900 Y1500 Z800, che garantisce una
                  precisione di misura senza precedenti. A completare
                  l'attrezzatura, sono presenti i più moderni strumenti di
                  misura.
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={metrologica_1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* contenitore immagini */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={metrologica_2}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={metrologica_3}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={metrologica_4}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={metrologica_5}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={metrologica_6}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={metrologica_7}
                  alt="Person"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
      <Footer />
    </div>
  );
};

export default Metrologica;
