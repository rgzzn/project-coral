import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Settori from "./pages/settori";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settori" element={<SettoriPage />} />
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

export default App;
