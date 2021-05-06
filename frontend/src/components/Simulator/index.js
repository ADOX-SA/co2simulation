import React from "react";

// Import context
import { RoomProvider } from "../../context/room-context";

// Imported components
import Room from "./components/Room";
import Parameters from "./components/Parameters";

export default function Simulator() {
  return (
    <div>
      <div className="menu">
        <h1>
          Simulador de riesgo de contagio por aerosoles en ambientes cerrados
        </h1>
        <p className="header-text">
          Siempre que las personas se reúnen en espacios cerrados, el riesgo de
          infección aumenta. Nuestra herramienta interactiva muestra cómo se
          propaga el <b>COVID-19</b>.
        </p>
      </div>
      <RoomProvider>
        <MainContainer />
      </RoomProvider>
    </div>
  );
}

function MainContainer() {
  return (
    <>
      <div className="wrapper">
        <Room />
        <Parameters />
      </div>
    </>
  );
}

// Personas ============================================
