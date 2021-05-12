import React, { useState, useEffect } from "react";

const RoomContext = React.createContext();

export function RoomProvider(props) {
  // Efectividad de las mascarillas
  // NO: 0
  // TELA: 0.5
  // QUIRURGICO: 0.65
  // N95: 0.9

  // Tasa de exhalación por minuto
  // ALUMNO: 0.24636
  // PROFESOR: 0.36812

  // Renovaciones de aire por hora
  // CERRADA: 0.1
  // PARCIAL: 3
  // ABIERTA: 5
  // SISTEMA: 7

  // Medidas de la habitación
  // ALTO: 2.4
  // ANCHO: 6
  // LARGO: 10

  // Propiedades del ambiente
  const [room, setRoom] = useState({
    teachers: 1,
    people: 12,
    infecteds: 1,
    maskEfficiency: 0, // 0 | 0.5 | 0.65 | 0.9
    maskPopulation: 1, // Fracción de personas con máscara. Asumimos un 100%
    duration: 1,
    ventilation: 0.1, // Renovaciones de aire por hora: 7 | 5 | 3 | 0.1
    firstOrderLoss: 5.92, // ventilation + 0.92 // ? Averiguar esto
    totalCO2ExhaladoPMinuto: 3.32444, // teachers * 0.36812 + people * 0.24636
    roomHeight: 2.4,
    roomWidth: 6,
    roomLarge: 10,
    roomVolumeM3: 144, // Volumen en metros cúbicos
    co2Exterior: 415, // Calibración exterior
    infectedExhalation: 60, // Tasa de exhalación sentado y hablando fuerte
    netEmissionRate: 60, // Tasa de emisión neta
    avrConcentrationOfQuantas: 0.06800508279, // Concentración media de quantas
  });

  function updateAvrConcentrationOfQuantasVENT(ventRate) {
    const { netEmissionRate, roomVolumeM3, duration } = room;
    const NEWfirstOrderLoss = ventRate + 0.92; // ? Averiguar si esto está bien

    const avrConcentrationOfQuantas =
      (netEmissionRate / NEWfirstOrderLoss / roomVolumeM3) *
      (1 -
        (1 / NEWfirstOrderLoss / duration) *
          (1 - Math.exp(-NEWfirstOrderLoss * duration)));

    setRoom({
      ...room,
      ventilation: ventRate,
      avrConcentrationOfQuantas: avrConcentrationOfQuantas,
      firstOrderLoss: NEWfirstOrderLoss,
    });
  }

  function updateAvrConcentrationOfQuantasDURATION(newDuration) {
    const { netEmissionRate, roomVolumeM3, firstOrderLoss } = room;

    const avrConcentrationOfQuantas =
      (netEmissionRate / firstOrderLoss / roomVolumeM3) *
      (1 -
        (1 / firstOrderLoss / newDuration) *
          (1 - Math.exp(-firstOrderLoss * newDuration)));

    setRoom({
      ...room,
      avrConcentrationOfQuantas: avrConcentrationOfQuantas,
      duration: newDuration,
    });
  }

  // Valor de retorno
  const value = {
    room,
    setRoom,
    updateAvrConcentrationOfQuantasVENT,
    updateAvrConcentrationOfQuantasDURATION,
  };

  useEffect(() => {
    console.log(room.avrConcentrationOfQuantas);
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
