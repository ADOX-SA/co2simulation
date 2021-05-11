import React, { useState, useEffect } from "react";

const RoomContext = React.createContext();

export function RoomProvider(props) {
  // Efectividad de las mascarillas
  var masks = {
    NO: 0,
    TELA: 0.5,
    QUIRURGICO: 0.65,
    N95: 0.9,
  };

  // Tasa de exhalación por minuto
  var tasaExhalacion = {
    ALUMNO: 0.24636,
    PROFESOR: 0.36812,
  };

  // Renovaciones de aire por hora
  var renovacionesDeAire = {
    CERRADA: 0.1,
    PARCIAL: 3,
    ABIERTA: 5,
    SISTEMA: 7,
  };

  var medidasHabitacion = {
    ALTO: 2.4,
    ANCHO: 6,
    LARGO: 10,
  };

  var volumenHabitacion =
    medidasHabitacion.ALTO * medidasHabitacion.ANCHO * medidasHabitacion.LARGO;

  var duracionEncuentro = 5;

  // Propiedades del ambiente
  const [room, setRoom] = useState({
    teachers: 1,
    people: 0,
    infecteds: 1,
    masks: 0,
    duration: 1,
    ventilation: 0,
    renovaciones: 0.1,
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
