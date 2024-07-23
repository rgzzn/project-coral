import { RiReactjsFill, RiComputerLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";

export const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-2xl mx-auto">
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 opacity-0 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                1
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <RiReactjsFill className="w-10 h-10 text-orange-accent-400" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">
                Prototipazione
              </p>
              <p className="text-sm text-gray-700">
                Realizziamo particolari anche in pezzo unico per qualunque tipo
                di assemblato in lamiera, acciaio, alluminio, ottone, bronzo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                2
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <RiComputerLine className="w-10 h-10 text-orange-accent-400" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">Gestione</p>
              <p className="text-sm text-gray-700">
                Bipres gestisce autonomamente commesse con assemblati da più di
                5000 codici. Dal progetto scegliamo la fornitura più adeguata.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                3
              </div>
            </div>
            <div className="w-px h-full opacity-0" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div className="sm:mr-5">
              <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                <BsCashCoin className="w-10 h-10 text-orange-accent-400" />
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold sm:text-base">
                Analisi e Preventivazione
              </p>
              <p className="text-sm text-gray-700">
                Siamo specializzati nel seguire il cliente a partire dalle
                esigenze tecniche in fase pre-progettuale, prendendo in
                considerazione tutti gli aspetti tecnico/produttivi del futuro
                prodotto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
