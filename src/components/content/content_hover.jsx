import { PiGearFineBold, PiStairsDuotone } from "react-icons/pi";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { RiDoorLockLine } from "react-icons/ri";
import { TbSettingsBolt } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";

export const ContentHover = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <a href="/" className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <PiGearFineBold className="w-12 h-12 text-orange-accent-400" />
            </div>
          </a>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
              HOME / SETTORI
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Settori di produzione
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              I diversi ambiti in cui forniamo alta qualità e soluzioni
              innovative
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="/settori/elettrodomestico"
            aria-label="Elettrodomestico"
            title="Elettrodomestico"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaKitchenSet className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Elettrodomestico</h6>
              <p className="text-sm">
                Eccellenza in componenti per elettrodomestici, dall’alta
                produzione a prototipi esclusivi, unendo tecnologia e design.
              </p>
            </div>
          </a>

          <a
            href="/settori/caffe"
            aria-label="Macchine per il caffè"
            title="Macchine per il caffè"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <MdOutlineCoffeeMaker className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Macchine per il caffè
              </h6>
              <p className="text-sm">
                Dal 2008, offriamo componenti di design e strutturali per leader
                del caffè, con acciaio aisi 304 e collaborazioni per rafforzare
                la loro posizione di mercato.
              </p>
            </div>
          </a>
          <a
            href="/settori/arredamento"
            aria-label="Arredamento grande distribuzione"
            title="Arredamento grande distribuzione"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <PiStairsDuotone className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Arredamento grande distribuzione
              </h6>
              <p className="text-sm ">
                Soluzioni meccaniche innovative per la grande distribuzione, con
                un focus su qualità e partnership strategiche.
              </p>
            </div>
          </a>
          <a
            href="/settori/serrature"
            aria-label="Serrature"
            title="Serrature"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <RiDoorLockLine className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Serrature</h6>
              <p className="text-sm ">
                Dallo stampaggio all’assemblaggio, eccellenza in componenti per
                serrature con free pass al mercato.
              </p>
            </div>
          </a>
          <a
            href="/settori/ceramico"
            aria-label="Ceramico"
            title="Ceramico"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <TbSettingsBolt className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Ceramico</h6>
              <p className="text-sm ">
                Vent’anni di eccellenza in componenti per ceramica, con
                soluzioni su misura e tecnologia avanzata.
              </p>
            </div>
          </a>
          <a
            href="/settori/packaging"
            aria-label="Packaging"
            title="Packaging"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <BsBoxSeam className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Packaging</h6>
              <p className="text-sm ">
                Precisione e innovazione definiscono la fornitura di componenti
                meccanici di alta qualità e sistemi completi per i leader
                dell'industria del packaging.
              </p>
            </div>
          </a>
        </div>
        <div className="text-center pb-12"></div>
      </div>
    </div>
  );
};
