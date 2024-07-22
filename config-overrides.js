// config-overrides.js
module.exports = function override(config, env) {
  // Trova la regola per i file SVG e aggiungi la configurazione di SVGR
  const rule = config.module.rules.find(
    (r) =>
      r.oneOf &&
      r.oneOf.find((o) => o.loader && o.loader.includes("file-loader"))
  );

  if (rule) {
    const svgLoader = {
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            throwIfNamespace: false, // Aggiungi questa opzione
          },
        },
        "url-loader", // Usa 'url-loader' o 'file-loader' come fallback
      ],
    };

    rule.oneOf.unshift(svgLoader); // Aggiungi il loader SVG prima degli altri
  }

  return config;
};
