import Corporate from "../../assets/BIPRES_CORPORATE.mp4";

export const Header = () => {
  const isSmallScreen = window.innerWidth <= 768; // Aggiungi questa variabile per controllare la dimensione dello schermo

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {isSmallScreen ? (
        <video
          src={Corporate}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      ) : (
        <video
          src={Corporate}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "1000px", objectFit: "cover" }}
        />
      )}
    </div>
  );
};
