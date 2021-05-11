import React, { useState, useEffect } from "react";

const RoomContext = React.createContext();

export function RoomProvider(props) {
  // Propiedades del ambiente
  const [room, setRoom] = useState({
    teachers: 1,
    people: 0,
    infecteds: 1,
    masks: 0,
    duration: 1,
    ventilation: 0,
  });

  // Valor de retorno
  const value = {
    room,
    setRoom,
  };

  useEffect(() => {
    console.log(room);
  });

  return <RoomContext.Provider value={value} {...props} />;
}

export function useRoom() {
  const context = React.useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom debe estar dentro del proveedor RoomContext");
  }
  return context;
}
