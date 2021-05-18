import React, { useState } from "react";

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
    alumnos: 12,
    infectados: 1,
    eficienciaDeBarbijo: 0, // 0 | 0.5 | 0.65 | 0.9
    poblacionConBarbijo: 1, // Fracción de personas con máscara. Asumimos un 100%
    duracion: 1,
    ventilacion: 0.1, // Renovaciones de aire por hora: 7 | 5 | 3 | 0.1
    perdidaDePrimerOrden: 1.02, // ventilation + 0.92 // ? Averiguar esto
    totalCO2ExhaladoPMinuto: 3.32444, // teachers * 0.36812 + people * 0.24636
    totalCO2ExhaladoPSegundo: 0.05540733333, // anterior pero en litros por segundo
    totalCO2Ambiente: 1085,
    alturaHabitacion: 2.4,
    anchoHabitacion: 6,
    largoHabitacion: 10,
    volumenHabitacion: 144, // Volumen en metros cúbicos
    co2Exterior: 415, // Calibración exterior
    exhalacionDeInfectado: 60, // Tasa de exhalación sentado y hablando fuerte
    tasaDeEmisionNeta: 60, // Tasa de emisión neta
    concentracionMediaDeCuantas: 0.1524233228, // Concentración media de quantas
    cuantasInhaladasPorPersona: 0.07926012787, // Quantas inhaladas por persona
    probabilidadDeInfeccion: 7.62,
  });

  // ============================ FUNCIONES PARA REALIZACIÓN DE CÁLCULOS ======================

  // Funciones públicas para actualizaciones principales

  /**
   * Realiza operaciones correspondientes tras cambio de barbijo
   * @param eficienciaDeBarbijo requerido
   */
  const cambioBarbijo = (eficienciaDeBarbijo) => {
    const nuevaTasaDeEmisionNeta = tasaDeEmisionNeta(eficienciaDeBarbijo);

    const _ = undefined;
    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      nuevaTasaDeEmisionNeta,
      _,
      _
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      eficienciaDeBarbijo,
      _,
      _
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    setRoom({
      ...room,
      eficienciaDeBarbijo: eficienciaDeBarbijo,
      tasaDeEmisionNeta: nuevaTasaDeEmisionNeta,
      concentracionMediaDeCuantas: nuevaConcentracionMediaDeCuantas,
      cuantasInhaladasPorPersona: nuevaCuantasInhaladasPorPersona,
      probabilidadDeInfeccion: nuevaProbabilidadDeInfeccion,
    });
  };

  /**
   * Realiza operaciones correspondientes tras cambio de duración
   * @param duracion requerido
   */
  const cambioDuracion = (duracion) => {
    const _ = undefined;
    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      _,
      duracion,
      _
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      _,
      duracion,
      _
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    const nuevaTotalCO2 = totalCO2Ambiente(duracion, _);

    setRoom({
      ...room,
      duracion: duracion,
      concentracionMediaDeCuantas: nuevaConcentracionMediaDeCuantas,
      cuantasInhaladasPorPersona: nuevaCuantasInhaladasPorPersona,
      probabilidadDeInfeccion: nuevaProbabilidadDeInfeccion,
      totalCO2Ambiente: nuevaTotalCO2,
    });
  };

  /**
   * Realiza operaciones correspondientes tras cambio de ventilación
   * @param ventilacion requerido
   */
  const cambioVentilacion = (ventilacion) => {
    const nuevaPerdidaDePrimerOrden = ventilacion + 0.92;

    const _ = undefined;
    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      _,
      _,
      ventilacion
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      _,
      _,
      ventilacion
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    const nuevaTotalCO2 = totalCO2Ambiente(_, ventilacion);

    setRoom({
      ...room,
      ventilacion: ventilacion,
      perdidaDePrimerOrden: nuevaPerdidaDePrimerOrden,
      concentracionMediaDeCuantas: nuevaConcentracionMediaDeCuantas,
      cuantasInhaladasPorPersona: nuevaCuantasInhaladasPorPersona,
      probabilidadDeInfeccion: nuevaProbabilidadDeInfeccion,
      totalCO2Ambiente: nuevaTotalCO2,
    });
  };

  // Funciones privadas de cálculos secundarios --------------------------------

  /**
   * Calcula la tasa de emisión neta
   * @param eficienciaDeBarbijo requerido
   * @returns tasaDeEmisionNeta
   */
  const tasaDeEmisionNeta = (eficienciaDeBarbijo) => {
    const { exhalacionDeInfectado, infectados, poblacionConBarbijo } = room;
    return (
      exhalacionDeInfectado *
      (1 - eficienciaDeBarbijo * poblacionConBarbijo) *
      infectados
    );
  };

  /**
   * Calcula la concentración media de cuantas
   * @param nuevaTasaDeEmisionNeta opcional
   * @param nuevaDuracion opcional
   * @param nuevaVentilacion opcional
   * @returns concentracionMediaDeCuantas
   */
  const concentracionMediaDeCuantas = (
    nuevaTasaDeEmisionNeta,
    nuevaDuracion,
    nuevaVentilacion
  ) => {
    if (nuevaTasaDeEmisionNeta) {
      const { perdidaDePrimerOrden, duracion, volumenHabitacion } = room;
      return (
        (nuevaTasaDeEmisionNeta / perdidaDePrimerOrden / volumenHabitacion) *
        (1 -
          (1 / perdidaDePrimerOrden / duracion) *
            (1 - Math.exp(-perdidaDePrimerOrden * duracion)))
      );
    } else if (nuevaDuracion) {
      const { perdidaDePrimerOrden, tasaDeEmisionNeta, volumenHabitacion } =
        room;
      return (
        (tasaDeEmisionNeta / perdidaDePrimerOrden / volumenHabitacion) *
        (1 -
          (1 / perdidaDePrimerOrden / nuevaDuracion) *
            (1 - Math.exp(-perdidaDePrimerOrden * nuevaDuracion)))
      );
    } else if (nuevaVentilacion) {
      const { duracion, volumenHabitacion, tasaDeEmisionNeta } = room;
      const nuevaPerdidaDePrimerOrden = nuevaVentilacion + 0.92;
      return (
        (tasaDeEmisionNeta / nuevaPerdidaDePrimerOrden / volumenHabitacion) *
        (1 -
          (1 / nuevaPerdidaDePrimerOrden / duracion) *
            (1 - Math.exp(-nuevaPerdidaDePrimerOrden * duracion)))
      );
    }
  };

  /**
   * Calcula las cuantas inhaladas por persona
   * @param concentracionMediaDeCuantas requerido
   * @param nuevaEficienciaDeBarbijo opcional
   * @param nuevaDuracion opcional
   * @param nuevaVentilacion opcional
   * @returns cuantasInhaladasPorPersona
   */
  const cuantasInhaladasPorPersona = (
    concentracionMediaDeCuantas,
    nuevaEficienciaDeBarbijo,
    nuevaDuracion,
    nuevaVentilacion
  ) => {
    if (nuevaEficienciaDeBarbijo || nuevaEficienciaDeBarbijo === 0) {
      const { duracion, poblacionConBarbijo } = room;
      return (
        concentracionMediaDeCuantas *
        0.52 *
        duracion *
        (1 - nuevaEficienciaDeBarbijo * poblacionConBarbijo)
      );
    } else if (nuevaDuracion) {
      const { eficienciaDeBarbijo, poblacionConBarbijo } = room;
      return (
        concentracionMediaDeCuantas *
        0.52 *
        nuevaDuracion *
        (1 - eficienciaDeBarbijo * poblacionConBarbijo)
      );
    } else if (nuevaVentilacion) {
      const { duracion, eficienciaDeBarbijo, poblacionConBarbijo } = room;
      return (
        concentracionMediaDeCuantas *
        0.52 *
        duracion *
        (1 - eficienciaDeBarbijo * poblacionConBarbijo)
      );
    }
  };

  /**
   * Calcula la probabilidad de infección por persona
   * @param cuantasInhaladasPorPersona requerido
   * @returns probabilidadDeInfeccion
   */
  const probabilidadDeInfeccion = (cuantasInhaladasPorPersona) => {
    return (1 - Math.exp(-cuantasInhaladasPorPersona)) * 100;
  };

  /**
   * Calcula el total de CO2 presente en el ambiente en partes por millón
   * @param nuevaDuracion opcional
   * @param nuevaVentilacion opcional
   * @returns totalCO2Ambiente
   */
  const totalCO2Ambiente = (nuevaDuracion, nuevaVentilacion) => {
    if (nuevaDuracion) {
      const {
        totalCO2ExhaladoPSegundo,
        volumenHabitacion,
        co2Exterior,
        ventilacion,
      } = room;
      return (
        ((totalCO2ExhaladoPSegundo * 3.6) / ventilacion / volumenHabitacion) *
          (1 -
            (1 / ventilacion / nuevaDuracion) *
              (1 - Math.exp(-ventilacion * nuevaDuracion))) *
          1000000 +
        co2Exterior
      );
    } else if (nuevaVentilacion) {
      const {
        totalCO2ExhaladoPSegundo,
        volumenHabitacion,
        co2Exterior,
        duracion,
      } = room;
      return (
        ((totalCO2ExhaladoPSegundo * 3.6) /
          nuevaVentilacion /
          volumenHabitacion) *
          (1 -
            (1 / nuevaVentilacion / duracion) *
              (1 - Math.exp(-nuevaVentilacion * duracion))) *
          1000000 +
        co2Exterior
      );
    }
  };

  // ================================== RETORNO DEL OBJETO ===================================
  // Valor de retorno
  const value = {
    room,
    cambioBarbijo,
    cambioDuracion,
    cambioVentilacion,
  };

  return <RoomContext.Provider value={value} {...props} />;
}

export function useRoom() {
  const context = React.useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom debe estar dentro del proveedor RoomContext");
  }
  return context;
}
