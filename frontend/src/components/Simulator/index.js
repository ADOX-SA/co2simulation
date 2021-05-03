import React, { useState } from "react";

// Imported components
import Room from "./components/Room";
import Parameters from "./components/Parameters";

export default function Simulator() {
  return (
    <div>
      <div className="menu">
        <h1>Why Is the Risk of Coronavirus Transmission so High Indoors?</h1>
        <p className="header-text">
          Whenever people gather in closed spaces, the infection risk climbs.
          Our interactive tool shows how the coronavirus spreads. Find out how
          safe your environment is.
        </p>
      </div>
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  const [room, setRoom] = useState({ teachers: 1, students: 0 });

  return (
    <>
      <div>
        <div className="wrapper">
          <Room room={room} setRoom={setRoom} />
          <Parameters room={room} setRoom={setRoom} />
        </div>
      </div>
    </>
  );
}

// Personas ============================================
