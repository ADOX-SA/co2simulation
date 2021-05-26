import React from "react";

// Import context
import { RoomProvider } from "../../context/room-context";

// Imported components
import Room from "./components/Room";
import Parameters from "./components/Parameters";

export default function Simulator() {
  return (
    <div>
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
