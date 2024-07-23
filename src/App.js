import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Settori from "./pages/settori";
import Elettrodomestico from "./pages/elettrodomestico";
import Caffe from "./pages/macchine_caffe";
import Arredamento from "./pages/arredamento";
import Serrature from "./pages/serrature";
import Ceramico from "./pages/ceramico";
import Packaging from "./pages/packaging";

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

export default App;
