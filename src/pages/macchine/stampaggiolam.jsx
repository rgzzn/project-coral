import React from "react";

import stampaggio_1 from "../../assets/macchine/stampaggio/stampaggio_1.jpg"
import stampaggio_2 from "../../assets/macchine/stampaggio/stampaggio_2.jpg"
import stampaggio_3 from "../../assets/macchine/stampaggio/stampaggio_3.jpg"

import { Feature } from "../../components/features/LavMacchine";
import Nav from "../../components/navbar/NavbarMacchine";
import { Foot as Footer } from "../../components/footer/footer";

const StampaggioLAM = () => {
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
                href="/macchine"
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
                Stampaggio Lamiera
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
                  Stampaggio{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-orange-accent-100" />
                    <span className="relative inline-block text-orange-accent-400">
                      Lamiera
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-600 md:text-lg">
                  <strong>Presse meccaniche:</strong> 50 macchine che vanno da 600 ton doppio montante con banco 2500×1500 a 10 ton a collo di cigno. Avanzamento nastro con calandre fino a 800 mm di lunghezza nastro.
                  <br></br><br></br><strong>Presse idrauliche:</strong> n. 2 da 400 e 300 ton con banco da 1,5 x 1,5 m. Inoltre una pressa idraulica da 200 ton con banco da 3000 x 1000
                  <br></br><br></br><strong>Robot di saldatura:</strong>
                  <br></br>n. 5 robot ABB serie IRB a 6 assi con tavole da 30 a 150 kg
                  <br></br>n. 1 robot kawasaki con tavola da 150 kg
                  <br></br><br></br><strong>Macchine speciali:</strong> Bipres è specializzata nella costruzione di macchine automatiche dedicate per ottimizzazione di produzione che vengono realizzate in partnership con i clienti
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={stampaggio_1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* contenitore immagini */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={stampaggio_2}
                  alt="Person"
                />
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={stampaggio_3}
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

export default StampaggioLAM;
