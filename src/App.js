import "./App.css";
import { Nav as Navbar } from "./components/navbar/Navbar";
import { Foot as Footer } from "./components/footer/footer.jsx";
import { Header } from "./components/header/Header";
import { Motto } from "./components/motto/Motto";
import { Content } from "./components/content/content";
import { Statistic } from "./components/content/Statistic";
import { Step } from "./components/content/keyPower";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Motto />
      <Content />
      <Statistic />
      <Step />
      <Footer />
    </div>
  );
}

export default App;
