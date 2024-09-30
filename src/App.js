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


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settori" element={<SettoriPage />} />
          <Route
            path="/settori/elettrodomestico"
            element={<ElettrodomesticoPage />}
          />
          <Route path="/settori/caffe" element={<CaffePage />} />
          <Route path="/settori/arredamento" element={<ArredamentoPage />} />
          <Route path="/settori/serrature" element={<SerraturePage />} />
          <Route path="/settori/ceramico" element={<CeramicoPage />} />
          <Route path="/settori/packaging" element={<PackagingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lavorazioni" element={<LavorazioniPage />} />
          <Route
            path="/lavorazioni/assemblaggio"
            element={<AssemblaggioPage />}
          />
          <Route path="/lavorazioni/cnc" element={<CNCPage />} />\
          <Route
            path="/lavorazioni/carpenteria"
            element={<CarpenteriaPage />}
          />
          <Route path="/lavorazioni/stampaggio" element={<StampaggioPage />} />
          <Route path="/knowhow" element={<KnowHowPage />} />
          <Route path="/knowhow/commessa" element={<CommessaPage />} />
          <Route
            path="/knowhow/prototipazione"
            element={<PrototipazionePage />}
          />
          <Route path="/knowhow/fattibilita" element={<FattibilitaPage />} />
          <Route path="/macchine" element={<ParcoMacchinePage />} />
          <Route path="/macchine/metrologica" element={<MetrologicaPage />} />
          <Route
            path="/macchine/lavorazionicnc"
            element={<LavorazioniCNCPage />}
          />
          <Route path="/macchine/stampaggiolam" element={<StampaggioLAMPage />}/>
          <Route path="/referenze" element={<ReferenzePage/>}/>
          <Route path="/casehistory" element={<caseHistoryPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

function SettoriPage() {
  return (
    <div>
      <Settori />
    </div>
  );
}

function ElettrodomesticoPage() {
  return (
    <div>
      <Elettrodomestico />
    </div>
  );
}

function CaffePage() {
  return (
    <div>
      <Caffe />
    </div>
  );
}
function ArredamentoPage() {
  return (
    <div>
      <Arredamento />
    </div>
  );
}

function SerraturePage() {
  return (
    <div>
      <Serrature />
    </div>
  );
}

function CeramicoPage() {
  return (
    <div>
      <Ceramico />
    </div>
  );
}

function PackagingPage() {
  return (
    <div>
      <Packaging />
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}

function LavorazioniPage() {
  return (
    <div>
      <Lavorazioni />
    </div>
  );
}

function AssemblaggioPage() {
  return (
    <div>
      <Assemblaggio />
    </div>
  );
}

function CNCPage() {
  return (
    <div>
      <CNC />
    </div>
  );
}

function CarpenteriaPage() {
  return (
    <div>
      <Carpenteria />
    </div>
  );
}

function StampaggioPage() {
  return (
    <div>
      <Stampaggio />
    </div>
  );
}

function KnowHowPage() {
  return (
    <div>
      <KnowHow />
    </div>
  );
}

function CommessaPage() {
  return (
    <div>
      <Commessa />
    </div>
  );
}

function PrototipazionePage() {
  return (
    <div>
      <Prototipazione />
    </div>
  );
}

function FattibilitaPage() {
  return (
    <div>
      <Fattibilita />
    </div>
  );
}

function ParcoMacchinePage() {
  return (
    <div>
      <ParcoMacchine />
    </div>
  );
}

function MetrologicaPage() {
  return (
    <div>
      <Metrologica />
    </div>
  );
}

function LavorazioniCNCPage() {
  return (
    <div>
      <LavorazioniCNC />
    </div>
  );
}

function StampaggioLAMPage() {
  return (
    <div>
      <StampaggioLAM />
    </div>
  )
}

function ReferenzePage() {
  return (
    <div>
      <Referenze />
    </div>
  )
}
export default App;
