import { useState } from "react";
import Forms from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import BannerNoCliente from "./components/BannerNoCliente/BannerNoCliente";
import ilustration from "./images/Ilustracion.svg";

import "./App.scss";

function App() {
  const [activeButton, setActiveButton] = useState("soy");

  return (
    <div className="App">
      <Navbar />
      <div className="welcome-message">
        <h1>
          <span>!Hola¡</span> Te damos la bienvenida
        </h1>
        <img className="ilustration-image" src={ilustration} />
      </div>
      <div className="side-bar">
        <div className="nav-buttons">
          <button
            onClick={() => setActiveButton("soy")}
            className={
              activeButton === "soy"
                ? "select-buttons"
                : "select-buttons disabled"
            }
          >
            Soy cliente
          </button>
          <button
            onClick={() => setActiveButton("noSoy")}
            className={
              activeButton === "noSoy"
                ? "select-buttons"
                : "select-buttons disabled"
            }
          >
            No soy cliente
          </button>
        </div>
        {activeButton === "soy" ? <Forms /> : <BannerNoCliente />}
      </div>
    </div>
  );
}

export default App;
