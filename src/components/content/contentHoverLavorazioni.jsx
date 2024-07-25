import { PiStairsDuotone } from "react-icons/pi";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { RiDoorLockLine } from "react-icons/ri";
import { TbSettingsBolt } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
{
  /* import { PiGearFineBold } from "react-icons/pi"; */
}

export const ContentHover = () => {
  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <a href="/" className="mb-4 mr-8"></a>
          <div>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Lavorazioni
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              DescLavorazioni
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-2">
          <a
            href="/lavorazioni/assemmblaggio"
            aria-label="Assemblaggio Gruppi A Commessa"
            title="Assemblaggio Gruppi A Commessa"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaKitchenSet className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Assemblaggio Gruppi A Commessa
              </h6>
              <p className="text-sm">DescAssemblaggioGruppiACommessa</p>
            </div>
          </a>

          <a
            href="/lavorazioni/cnc"
            aria-label="Lavorazioni Meccaniche CNC"
            title="Lavorazioni Meccaniche CNC"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <MdOutlineCoffeeMaker className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Lavorazioni Meccaniche CNC
              </h6>
              <p className="text-sm">DescLavorazioniMeccanicheCNC</p>
            </div>
          </a>
          <a
            href="/lavorazioni/carpenteria"
            aria-label="Carpenteria Metallica"
            title="Carpenteria Metallica"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <PiStairsDuotone className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Carpenteria Metallica
              </h6>
              <p className="text-sm ">DescCarpenteriaMetallica</p>
            </div>
          </a>
          <a
            href="/lavorazioni/stampaggio"
            aria-label="Stampaggio Lamiera Acciaio"
            title="Stampaggio Lamiera Acciaio"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <RiDoorLockLine className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Stampaggio Lamiera Acciaio
              </h6>
              <p className="text-sm ">DescStampaggioLamieraAcciaio</p>
            </div>
          </a>
        </div>
        <div className="text-center pb-12"></div>
      </div>
    </div>
  );
};
