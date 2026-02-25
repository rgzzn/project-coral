import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Settori from "./pages/settori/settori";
import Elettrodomestico from "./pages/settori/elettrodomestico";
import Caffe from "./pages/settori/macchine_caffe";
import Arredamento from "./pages/settori/arredamento";
import Serrature from "./pages/settori/serrature";
import Ceramico from "./pages/settori/ceramico";
import Packaging from "./pages/settori/packaging";
import Contact from "./pages/contact";
import Lavorazioni from "./pages/lavorazioni/lavorazioni";
import Assemblaggio from "./pages/lavorazioni/assemblaggio";
import CNC from "./pages/lavorazioni/cnc";
import Carpenteria from "./pages/lavorazioni/carpenteria";
import Stampaggio from "./pages/lavorazioni/stampaggio";
import KnowHow from "./pages/knowhow/knowhow";
import Commessa from "./pages/knowhow/commessa";
import Prototipazione from "./pages/knowhow/prototipazione";
import Fattibilita from "./pages/knowhow/fattibilita";
import ParcoMacchine from "./pages/macchine/parcoMacchine";
import Metrologica from "./pages/macchine/metrologica";
import LavorazioniCNC from "./pages/macchine/lavorazionicnc";
import StampaggioLAM from "./pages/macchine/stampaggiolam";
import Referenze from "./pages/referenze";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/settori", element: <Settori /> },
  { path: "/settori/elettrodomestico", element: <Elettrodomestico /> },
  { path: "/settori/caffe", element: <Caffe /> },
  { path: "/settori/arredamento", element: <Arredamento /> },
  { path: "/settori/serrature", element: <Serrature /> },
  { path: "/settori/ceramico", element: <Ceramico /> },
  { path: "/settori/packaging", element: <Packaging /> },
  { path: "/contact", element: <Contact /> },
  { path: "/lavorazioni", element: <Lavorazioni /> },
  { path: "/lavorazioni/assemblaggio", element: <Assemblaggio /> },
  { path: "/lavorazioni/cnc", element: <CNC /> },
  { path: "/lavorazioni/carpenteria", element: <Carpenteria /> },
  { path: "/lavorazioni/stampaggio", element: <Stampaggio /> },
  { path: "/knowhow", element: <KnowHow /> },
  { path: "/knowhow/commessa", element: <Commessa /> },
  { path: "/knowhow/prototipazione", element: <Prototipazione /> },
  { path: "/knowhow/fattibilita", element: <Fattibilita /> },
  { path: "/macchine", element: <ParcoMacchine /> },
  { path: "/macchine/metrologica", element: <Metrologica /> },
  { path: "/macchine/lavorazionicnc", element: <LavorazioniCNC /> },
  { path: "/macchine/stampaggiolam", element: <StampaggioLAM /> },
  { path: "/referenze", element: <Referenze /> },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
