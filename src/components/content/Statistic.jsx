export const Statistic = () => {
  return (
    <div className="bg-orange-accent-400">
      <div className="px-4 py-48 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-28 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-orange-accent-100 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-orange-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-gray-100">2.6 MLN</h6>
            <p className="mb-2 font-bold text-md">Pezzi prodotti all'anno</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-orange-accent-100 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-orange-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-gray-100">2.3 MLN</h6>
            <p className="mb-2 font-bold text-md">
              Kg di metallo lavorato all'anno
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-orange-accent-100 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-orange-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-gray-100">3177</h6>
            <p className="mb-2 font-bold text-md">
              Componenti montati in una singola macchina
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-orange-accent-100 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-orange-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-gray-100">245K</h6>
            <p className="mb-2 font-bold text-md">
              km percorsi all'anno per raggiungere i nostri clienti
            </p>
            {/*<p className="text-gray-700">
            Happiness is when what you think, what you say, and what you do are
            in harmony.
          </p>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
