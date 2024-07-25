import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import arredamento_1 from "../../assets/settori/arredamento/arredamento_1.jpg";
import arredamento_2 from "../../assets/settori/arredamento/arredamento_2.jpg";
import arredamento_3 from "../../assets/settori/arredamento/arredamento_3.jpg";
import arredamento_4 from "../../assets/settori/arredamento/arredamento_4.jpg";
import arredamento_5 from "../../assets/settori/arredamento/arredamento_5.jpg";
import arredamento_6 from "../../assets/settori/arredamento/arredamento_6.jpg";

import Nav from "../../components/navbar/NavbarSettori";
import { Foot as Footer } from "../../components/footer/footer";

const Arredamento = () => {
  return (
    <div>
      <Nav />
      <div>
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
                  href="/settori"
                  class="ms-1 text-sm font-medium text-gray-700 hover:text-orange-accent-400 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Settori
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
                  Arredamento grande distribuzione
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div>
        {/* contenitore per il settore */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                  Settore
                  <br className="hidden md:block" />
                  Arredamento grande{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-orange-accent-100" />
                    <span className="relative inline-block text-orange-accent-400">
                      Distribuzione
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  Bipres è legata a leader di mercato in ambito di realizzazione
                  componentistica meccanica per la grande distribuzione. Da
                  particolari per il montaggio dello scaffale a scale vendute in
                  kit e montabili dall’utilizzatore finale. I particolari,
                  realizzati con materiali strutturali certificati, sono
                  stampati saldati da Bipres con stampi nati in seno alle nostre
                  divisioni tecniche che si avvalgono di fornitura per la
                  progettazione e realizzazione delle attrezzature di elevata
                  competenza e in grado di risolvere diversi problemi al nostro
                  cliente (antisdruciolo, precisione al montaggio seriale,
                  filettatura automatica su stampo, qualità estetica, anti
                  taglio, etc..)
                </p>
              </div>
              <div className="grid space-y-3 sm:gap-1 sm:grid-cols-1 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Realizzazione di scale vendute in kit e montabili
                    dall'utilizzatore finale
                  </li>
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Particolari realizzati con materiali strutturali certificati
                  </li>
                  <li className="flex">
                    <span className="mr-1 flex items-center">
                      <FaRegDotCircle className="w-5 h-5 mt-px text-orange-accent-400" />
                    </span>
                    Stampi progettati da Bipres all'interno delle divisioni
                    tecniche
                  </li>
                </ul>
                {/* 
                <ul className="space-y-3">
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
                src={arredamento_5}
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
                  src={arredamento_1}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={arredamento_2}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={arredamento_3}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={arredamento_4}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={arredamento_6}
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

export default Arredamento;
