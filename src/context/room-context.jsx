import React, { useState } from "react";
import { useEffect } from "react";

const RoomContext = React.createContext();

export function RoomProvider(props) {
  // Propiedades del ambiente
  const [room, setRoom] = useState({
    profesores: 1,
    alumnos: 3,
    totalPersonas: 4,
    infectados: 1,
    eficienciaDeBarbijo: 0.5, // 0 | 0.5 | 0.65 | 0.9
    poblacionConBarbijo: 1, // Fracción de personas con máscara. Asumimos un 100%
    duracion: 0.25,
    ventilacion: 3, // Renovaciones de aire por hora: 7 | 5 | 3 | 0.1
    perdidaDePrimerOrden: 3.92, // ventilation + 0.92
    tasaEmisionCO2PPersona: 0.005,
    totalCO2ExhaladoPSegundo: 0.0225941019489966, // anterior pero en litros por segundo
    totalCO2Ambiente: 582.472418755914,
    alturaHabitacion: 2.4,
    anchoHabitacion: 4,
    largoHabitacion: 5,
    superficie: 20,
    volumenHabitacion: 48, // Volumen en metros cúbicos
    separacionEntrePersonas: 1.5,
    co2Exterior: 415, // Calibración exterior
    exhalacionDeInfectado: 9.4, // 2 | 9.4 | 30 | 60
    tasaDeEmisionNeta: 4.7, // Tasa de emisión neta infectada
    concentracionMediaDeCuantas: 0.00905635111130767, // Concentración media de quantas
    cuantasInhaladasPorPersona: 0.000584134646679345, // Quantas inhaladas por persona
    probabilidadDeInfeccion: 0.0583964073250898,
  });

  // ============================ FUNCIONES PARA REALIZACIÓN DE CÁLCULOS ======================

  // Funciones públicas para actualizaciones principales

  /**
   * Realiza operaciones correspondientes tras cambio de barbijo
   * @param eficienciaDeBarbijo requerido
   */
  const cambioBarbijo = (eficienciaDeBarbijo) => {
    const _ = undefined;
    const nuevaTasaDeEmisionNeta = tasaDeEmisionNeta(eficienciaDeBarbijo, _, _);

    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      nuevaTasaDeEmisionNeta,
      _,
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
    const nuevaDuracion = duracion / 4;

    const _ = undefined;
    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      _,
      nuevaDuracion,
      _,
      _
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      _,
      nuevaDuracion,
      _
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    const nuevaTotalCO2 = totalCO2Ambiente(nuevaDuracion, _, _, _);

    setRoom({
      ...room,
      duracion: nuevaDuracion,
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
      ventilacion,
      _
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

    const nuevaTotalCO2 = totalCO2Ambiente(_, ventilacion, _, _);

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

  /**
   * Realiza operaciones correspondientes tras cambio de la cantidad de personas
   * @param personas requerido
   */
  const cambioPersonas = (personas) => {
    const _ = undefined;
    const totalesCO2 = totalCO2Ambiente(_, _, personas, _);

    setRoom({
      ...room,
      profesores: 1,
      alumnos: personas - 1,
      totalPersonas: personas,
      totalCO2ExhaladoPSegundo: totalesCO2[0],
      totalCO2Ambiente: totalesCO2[1],
    });
  };

  /**
   * Realiza operaciones correspondientes tras cambio de la cantidad de personas infectadas
   * @param infectados requerido
   */
  const cambioInfectados = (infectados) => {
    const _ = undefined;

    const nuevaTasaDeEmisionNeta = tasaDeEmisionNeta(_, infectados);

    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      nuevaTasaDeEmisionNeta,
      _,
      _,
      _
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      _,
      _,
      _
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    setRoom({
      ...room,
      infectados: infectados,
      tasaDeEmisionNeta: nuevaTasaDeEmisionNeta,
      concentracionMediaDeCuantas: nuevaConcentracionMediaDeCuantas,
      cuantasInhaladasPorPersona: nuevaCuantasInhaladasPorPersona,
      probabilidadDeInfeccion: nuevaProbabilidadDeInfeccion,
    });
  };

  /**
   * Realiza operaciones correspondientes tras cambio de la cantidad de personas infectadas
   * @param superficie requerido
   */
  const cambioSuperficie = (superficie) => {
    const _ = undefined;

    const nuevoVolumen = room.alturaHabitacion * superficie;

    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      _,
      _,
      _,
      nuevoVolumen
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      _,
      _,
      _
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    const nuevoTotalCO2Ambiente = totalCO2Ambiente(_, _, _, nuevoVolumen);

    setRoom({
      ...room,
      superficie: superficie,
      volumenHabitacion: nuevoVolumen,
      concentracionMediaDeCuantas: nuevaConcentracionMediaDeCuantas,
      cuantasInhaladasPorPersona: nuevaCuantasInhaladasPorPersona,
      probabilidadDeInfeccion: nuevaProbabilidadDeInfeccion,
      totalCO2Ambiente: nuevoTotalCO2Ambiente,
    });
  };

  /**
   * Realiza operaciones correspondientes tras cambio del volumen del habla
   * @param volumen requerido
   */
  const cambioVolumen = (volumen) => {
    const _ = undefined;
    const nuevaTasaDeEmisionNeta = tasaDeEmisionNeta(_, _, volumen);

    const nuevaConcentracionMediaDeCuantas = concentracionMediaDeCuantas(
      nuevaTasaDeEmisionNeta,
      _,
      _,
      _
    );

    const nuevaCuantasInhaladasPorPersona = cuantasInhaladasPorPersona(
      nuevaConcentracionMediaDeCuantas,
      _,
      _,
      _
    );

    const nuevaProbabilidadDeInfeccion = probabilidadDeInfeccion(
      nuevaCuantasInhaladasPorPersona
    );

    setRoom({
      ...room,
      exhalacionDeInfectado: volumen,
      tasaDeEmisionNeta: nuevaTasaDeEmisionNeta,
      concentracionMediaDeCuantas: nuevaConcentracionMediaDeCuantas,
      cuantasInhaladasPorPersona: nuevaCuantasInhaladasPorPersona,
      probabilidadDeInfeccion: nuevaProbabilidadDeInfeccion,
    });
  };

  // Funciones privadas de cálculos secundarios --------------------------------

  /**
   * Calcula la tasa de emisión neta
   * @param nuevaEficienciaDeBarbijo opcional
   * @param nuevoInfectados opcional
   * @param nuevaExhalacionDeInfectado opcional
   * @returns tasaDeEmisionNeta
   */
  const tasaDeEmisionNeta = (
    nuevaEficienciaDeBarbijo,
    nuevoInfectados,
    nuevaExhalacionDeInfectado
  ) => {
    if (nuevaEficienciaDeBarbijo || nuevaEficienciaDeBarbijo === 0) {
      const { exhalacionDeInfectado, infectados, poblacionConBarbijo } = room;
      return (
        exhalacionDeInfectado *
        (1 - nuevaEficienciaDeBarbijo * poblacionConBarbijo) *
        infectados
      );
    } else if (nuevoInfectados) {
      const {
        exhalacionDeInfectado,
        eficienciaDeBarbijo,
        poblacionConBarbijo,
      } = room;
      return (
        exhalacionDeInfectado *
        (1 - eficienciaDeBarbijo * poblacionConBarbijo) *
        nuevoInfectados
      );
    } else if (nuevaExhalacionDeInfectado) {
      const { infectados, eficienciaDeBarbijo, poblacionConBarbijo } = room;
      return (
        nuevaExhalacionDeInfectado *
        (1 - eficienciaDeBarbijo * poblacionConBarbijo) *
        infectados
      );
    }
  };

  /**
   * Calcula la concentración media de cuantas
   * @param nuevaTasaDeEmisionNeta opcional
   * @param nuevaDuracion opcional
   * @param nuevaVentilacion opcional
   * @param nuevoVolumen opcional
   * @returns concentracionMediaDeCuantas
   */
  const concentracionMediaDeCuantas = (
    nuevaTasaDeEmisionNeta,
    nuevaDuracion,
    nuevaVentilacion,
    nuevoVolumen
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
    } else if (nuevoVolumen) {
      const { duracion, perdidaDePrimerOrden, tasaDeEmisionNeta } = room;
      return (
        (tasaDeEmisionNeta / perdidaDePrimerOrden / nuevoVolumen) *
        (1 -
          (1 / perdidaDePrimerOrden / duracion) *
            (1 - Math.exp(-perdidaDePrimerOrden * duracion)))
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
    } else {
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
   * @param nuevaPersonas opcional
   * @param nuevoVolumen opcional
   * @returns totalCO2Ambiente
   */
  const totalCO2Ambiente = (
    nuevaDuracion,
    nuevaVentilacion,
    nuevaPersonas,
    nuevoVolumen
  ) => {
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
    } else if (nuevaPersonas) {
      const {
        tasaEmisionCO2PPersona,
        volumenHabitacion,
        duracion,
        co2Exterior,
        ventilacion,
      } = room;

      const nuevoTotalCO2ExhaladoPSegundo =
        (tasaEmisionCO2PPersona * nuevaPersonas * (1 / 0.95) * (273.15 + 20)) /
        273.15;

      const nuevoTotalCO2Ambiente =
        ((nuevoTotalCO2ExhaladoPSegundo * 3.6) /
          ventilacion /
          volumenHabitacion) *
          (1 -
            (1 / ventilacion / duracion) *
              (1 - Math.exp(-ventilacion * duracion))) *
          1000000 +
        co2Exterior;

      return [nuevoTotalCO2ExhaladoPSegundo, nuevoTotalCO2Ambiente];
    } else if (nuevoVolumen) {
      const { totalCO2ExhaladoPSegundo, duracion, co2Exterior, ventilacion } =
        room;
      return (
        ((totalCO2ExhaladoPSegundo * 3.6) / ventilacion / nuevoVolumen) *
          (1 -
            (1 / ventilacion / duracion) *
              (1 - Math.exp(-ventilacion * duracion))) *
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
    cambioPersonas,
    cambioInfectados,
    cambioSuperficie,
    cambioVolumen,
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

// ESTADO INICIAL DEL AMBIENTE
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
