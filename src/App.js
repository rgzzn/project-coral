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

export default App;
