export const Motto = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Tecnologie meccaniche a
              <br className="hidden md:block" />
              servizio di impresa,{" "}
              <span className="inline-block text-orange-accent-400">
                dal 1960
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
              La programmazione annuale di nuovi investimenti in risorse umane,
              in tecnologie di ultima generazione e in logistica, unita alla
              particolare attenzione verso la formazione continua del nostro
              personale, sono il patrimonio che costantemente salvaguardiamo e
              sviluppiamo.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-accent-400 hover:text-orange-800"
            >
              Scopri di più
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
