import { PiWrenchDuotone } from "react-icons/pi";
import { FaSheetPlastic } from "react-icons/fa6";
import { MdOutlineCarpenter } from "react-icons/md";
import { TbAssembly } from "react-icons/tb";

export const ContentHover = () => {
  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <div>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Lavorazioni
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Offriamo servizi completi di assemblaggio, lavorazioni CNC,
              carpenteria metallica e stampaggio di lamiera, con competenze in
              vari settori e un'analisi di costo precisa.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-2">
          <a
            href="/lavorazioni/assemblaggio"
            aria-label="Assemblaggio Gruppi A Commessa"
            title="Assemblaggio Gruppi A Commessa"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <TbAssembly className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Assemblaggio Gruppi A Commessa
              </h6>
              <p className="text-sm">
                Offriamo un servizio completo di gestione, montaggio e verifica
                di gruppi meccanici complessi, con approvvigionamento autonomo
                di componenti e realizzazione di macchine ripetitive e
                prototipi.
              </p>
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
                <PiWrenchDuotone className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Lavorazioni Meccaniche CNC
              </h6>
              <p className="text-sm">
                Bipres offre servizi di tornitura avanzata su vari materiali con
                macchine di alta precisione, inclusa la lavorazione di pezzi
                complessi e la fresatura su piani inclinati.
              </p>
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
                <MdOutlineCarpenter className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Carpenteria Metallica
              </h6>
              <p className="text-sm ">
                Realizziamo carpenterie metalliche di varie dimensioni e tipi,
                offrendo servizi di saldatura, trattamenti termici, sabbiatura e
                lavorazioni di alesatrice per progetti architettonici e
                ingegneristici.
              </p>
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
                <FaSheetPlastic className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Stampaggio Lamiera Acciaio
              </h6>
              <p className="text-sm ">
                Siamo leader nello stampaggio a freddo di lamiere e coils, con
                capacità di produzione flessibile, competenze in particolari
                estetici e strutturali, mantenendo sempre un'analisi di costo
                precisa.
              </p>
            </div>
          </a>
        </div>
        <div className="text-center pb-12"></div>
      </div>
    </div>
  );
};
