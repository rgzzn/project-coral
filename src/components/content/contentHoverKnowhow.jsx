import { PiWrenchDuotone } from "react-icons/pi";
import { MdOutlineCarpenter } from "react-icons/md";
import { TbAssembly } from "react-icons/tb";

export const ContentHover = () => {
  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <div>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Know How
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Bipres è un'azienda che gestisce progetti, realizza prototipi
              unici per vari assemblati e supporta i clienti dalla fase
              pre-progettuale, fornendo analisi dettagliate di costi e
              fattibilità.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-1">
          <a
            href="/knowhow/commessa"
            aria-label="Assemblaggio Gruppi A Commessa"
            title="Assemblaggio Gruppi A Commessa"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <TbAssembly className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Gestione Commessa
              </h6>
              <p className="text-sm">
                Bipres è un'azienda che gestisce autonomamente progetti
                complessi, scegliendo le forniture più adeguate per i clienti,
                offrendo consulenza per ridurre i costi e risolvendo problemi in
                una partnership con il cliente, seguendo il motto del suo
                fondatore Emilio Biserni.
              </p>
            </div>
          </a>
          <a
            href="/knowhow/prototipazione"
            aria-label="Lavorazioni Meccaniche CNC"
            title="Lavorazioni Meccaniche CNC"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <PiWrenchDuotone className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Prototipazione</h6>
              <p className="text-sm">
                Realizziamo pezzi unici per vari assemblati, offrendo prototipi
                per l'analisi tecnica e la valutazione dei costi, che servono
                come base per la produzione e permettono test e verifiche, utili
                sia per valutazioni tecniche che di marketing.
              </p>
            </div>
          </a>
          <a
            href="/knowhow/fattibilita"
            aria-label="Carpenteria Metallica"
            title="Carpenteria Metallica"
            className=""
          >
            <div className="p-5 duration-300 transform p-8 rounded shadow-xl sm:p-8 hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <MdOutlineCarpenter className="w-7 h-7 text-orange-accent-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Analisi fattibilità e preventivazione
              </h6>
              <p className="text-sm ">
                Siamo esperti nel supportare il cliente dalla fase
                pre-progettuale, fornendo analisi dettagliate di costi e
                fattibilità, consulenza per soluzioni alternative e un ampio
                sistema di fornitori per valutare vari aspetti del prodotto,
                comprese ottimizzazioni di costo.
              </p>
            </div>
          </a>
        </div>
        <div className="text-center pb-12"></div>
      </div>
    </div>
  );
};
