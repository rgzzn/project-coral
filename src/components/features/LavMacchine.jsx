import { PiStairsDuotone } from "react-icons/pi";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { RiDoorLockLine } from "react-icons/ri";
import { TbSettingsBolt } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-orange-accent-400">
            SETTORI
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Scopri</span>
          </span>{" "}
          i nostri settori
        </h2>
        <p className="text-base md:text-lg">
          I diversi ambiti in cui forniamo alta qualità e soluzioni innovative
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <FaKitchenSet className="w-7 h-7 text-orange-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Elettrodomestico</h6>
            <p className="mb-3 text-sm">
              Eccellenza in componenti per elettrodomestici, dall’alta
              produzione a prototipi esclusivi, unendo tecnologia e design.
            </p>
          </div>
          <a
            href="/settori/elettrodomestico"
            aria-label="Elettrodomestico"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
          >
            Scopri di più
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <MdOutlineCoffeeMaker className="w-7 h-7 text-orange-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Macchine per il caffè
            </h6>
            <p className="mb-3 text-sm">
              Dal 2008, offriamo componenti di design e strutturali per leader
              del caffè, con acciaio aisi 304 e collaborazioni per rafforzare la
              loro posizione di mercato.
            </p>
          </div>
          <a
            href="/settori/caffe"
            aria-label="Macchine per il Caffè"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
          >
            Scopri di più
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <PiStairsDuotone className="w-7 h-7 text-orange-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Arredamento grande distribuzione
            </h6>
            <p className="mb-3 text-sm">
              Soluzioni meccaniche innovative per la grande distribuzione, con
              un focus su qualità e partnership strategiche.
            </p>
          </div>
          <a
            href="/settori/arredamento"
            aria-label="Arredamento grande distribuzione"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
          >
            Scopri di più
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <RiDoorLockLine className="w-7 h-7 text-orange-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Serrature</h6>
            <p className="mb-3 text-sm">
              Dallo stampaggio all’assemblaggio, eccellenza in componenti per
              serrature con free pass al mercato.
            </p>
          </div>
          <a
            href="/settori/serrature"
            aria-label="Serrature"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
          >
            Scopri di più
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <TbSettingsBolt className="w-7 h-7 text-orange-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Ceramico</h6>
            <p className="mb-3 text-sm">
              Vent’anni di eccellenza in componenti per ceramica, con soluzioni
              su misura e tecnologia avanzata.
            </p>
          </div>
          <a
            href="/settori/ceramico"
            aria-label="Ceramico"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
          >
            Scopri di più
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <BsBoxSeam className="w-7 h-7 text-orange-accent-400" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Packaging</h6>
            <p className="mb-3 text-sm">
              Precisione e innovazione definiscono la fornitura di componenti
              meccanici di alta qualità e sistemi completi per i leader
              dell'industria del packaging.
            </p>
          </div>
          <a
            href="/settori/packaging"
            aria-label="Packaging"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </div>
  );
};
