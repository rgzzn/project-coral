import React from "react";

import { TiGroupOutline } from "react-icons/ti";
import Comega_Logo from "../../assets/Comega_logo.png";

import { FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

export const ComegaOrange = () => {
  return (
    <div className="bg-orange-accent-400">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={Comega_Logo}
              alt=""
            />
          </div>
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <TiGroupOutline className="w-9 h-9 text-orange-accent-400" />
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-black">
              La forza del{" "}
              <span className="relative inline-block text-white">gruppo</span>
            </h5>
            <p className="mb-6">
              Da oltre 15 anni Comega è partner di eccellenza nella
              realizzazione di macchine di imballaggio e linee chiavi in mano,
              dal secondary packaging al fine linea di palletizzazione.
              L’utilizzo delle molteplici tecnologie di handling prodotto, non
              ultimo la robotica più avanzata a garanzia di efficienza e
              versatilità, permette di rispondere adeguatamente alle numerose
              esigenze di mercato nei diversi settori industriali, con soluzioni
              adattabili e personalizzabili in funzione delle singole necessità.
              Nel 2020 Comega viene acquisita da BIPRES SPA e questo nuovo
              assetto ha favorito un rinnovato slancio dell’azienda creando
              nuove importanti opportunità.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-black transition-colors duration-300 hover:text-orange-accent-700"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="/"
                className="text-black transition-colors duration-300 hover:text-orange-accent-700"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaGlobe></FaGlobe>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
