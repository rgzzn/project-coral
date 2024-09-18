import ceflaLogo from "../../assets/reference/ceflaLogo.png";
import cimbaliLogo from "../../assets/reference/cimbaliLogo.png";
import cisaLogo from "../../assets/reference/cisaLogo.png";
import electroluxLogo from "../../assets/reference/electroluxLogo.png";
import fivesLogo from "../../assets/reference/fivesLogo.png";
import fontanotLogo from "../../assets/reference/fontanotLogo.png";
import imaLogo from "../../assets/reference/imaLogo.png";
import sacmiLogo from "../../assets/reference/sacmiLogo.png";
import scmLogo from "../../assets/reference/scmLogo.png";

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-3">
        <a
          href="https://www.cefla.com/it/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={ceflaLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Cefla
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.cimbaligroup.com/en/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={cimbaliLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Gruppo Cimbali
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.cisa.com/it/index.html"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={cisaLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Cisa-Allegion</h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.electrolux.it/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={electroluxLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Electrolux
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.fivesgroup.com"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={fivesLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Fives Oto
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.fontanot.it"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={fontanotLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Fontanot
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://ima.it/it/il-gruppo-ima/"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={imaLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">Gruppo IMA</h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.sacmi.it"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={sacmiLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  Sacmi
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://www.scmgroup.com/it"
          aria-label="View Item"
          className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={scmLogo}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                  SCM
                </h6>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};