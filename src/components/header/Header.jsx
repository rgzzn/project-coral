import Corporate from "../../assets/BIPRES_CORPORATE.webm";

export const Header = () => {
  const isSmallScreen = window.innerWidth <= 768; // Aggiungi questa variabile per controllare la dimensione dello schermo

  return (
    <div style={{ width: "100vw", height: "auto", overflow: "hidden" }}>
      {isSmallScreen ? (
        <video
          src={Corporate}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      ) : (
        <video
          src={Corporate}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "1400px", objectFit: "cover" }}
        />
      )}
    </div>
  );
};
