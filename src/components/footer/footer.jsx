import logoAllWhite from "../../assets/logoAllWhite.svg";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";

export const Foot = () => {
  return (
    <div className="relative mt-16 bg-orange-accent-400">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-orange-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logoAllWhite} alt="" height="200px" />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-orange-50">
                Via Nazionale 21, 47017 <br></br>Rocca di San Casciano (FC) -
                Italy
              </p>
              <p className="mt-4 text-sm text-orange-50">+39 0543 960 336</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-gray-900">
                Settori
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/settori/elettrodomestico"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Elettrodomestico
                  </a>
                </li>
                <li>
                  <a
                    href="/settori/caffe"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Macchine per il caffè
                  </a>
                </li>
                <li>
                  <a
                    href="/settori/arredamento"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Arredamento grande distribuzione
                  </a>
                </li>
                <li>
                  <a
                    href="/settore/serrature"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Serrature
                  </a>
                </li>
                <li>
                  <a
                    href="/settori/ceramico"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Ceramico
                  </a>
                </li>
                <li>
                  <a
                    href="/settori/packaging"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Packaging
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-900">
                Lavorazioni
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Carpenteria Metallica
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Stampaggio Lamiere Acciaio
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Lavorazioni Macchine CNC
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Assemblaggio Gruppi a Commessa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-900">
                Know How
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Analisi fattibilità e preventivazione
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Prototipazione
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Gestione Commessa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-900">
                Azienda
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Referenze
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Case History
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Contatti
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-orange-50 hover:text-gray-900"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-orange-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2024 Bipres S.p.A - Tutti i diritti sono riservati. |
            P.IVA 01608140404 - Iscrizione Registro Imprese Forlì-Cesena n.11776
            - Cap.Soc.Inv. € 1.000.000,00 i.v.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-orange-100 hover:text-gray-900"
            >
              <FaSquareFacebook className="h-6" />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-orange-100 hover:text-gray-900"
            >
              <FaLinkedin className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
