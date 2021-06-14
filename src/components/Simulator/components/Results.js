import React from "react";
import { useRoom } from "../../../context/room-context";

// Imported assets
import sensor from "../../../assets/sensor/Sensor.svg";
import sensorNormal from "../../../assets/sensor/SensorNormal.svg";
import sensorAlto from "../../../assets/sensor/SensorAlto.svg";
import sensorPeligro from "../../../assets/sensor/SensorPeligro.svg";

export default function Results() {
  const { room } = useRoom();

  return (
    <div className="results-card">
      {/* <div className="results-header">
        <h3 className="results-title">Resultados</h3>
      </div> */}
      <div className="results-wrapper">
        <div>
          <div className="ppm-card">
            <h5 className="results-subtitle">
              Total CO<sub>2</sub> presente en el ambiente (partes por millón):
            </h5>
            <h1
              className={
                room.totalCO2Ambiente < 800
                  ? "ppmOK results-ppm"
                  : room.totalCO2Ambiente >= 800 && room.totalCO2Ambiente < 1400
                  ? "ppmAlto results-ppm"
                  : "ppmPeligro results-ppm"
              }
            >
              {parseInt(room.totalCO2Ambiente)} ppm
            </h1>
            <h5 className="results-subtitle">
              Nivel de alerta:{" "}
              <span
                className={
                  room.totalCO2Ambiente < 800
                    ? "ppmOK alerta"
                    : room.totalCO2Ambiente >= 800 &&
                      room.totalCO2Ambiente < 1400
                    ? "ppmAlto alerta"
                    : "ppmPeligro alerta"
                }
              >
                {room.totalCO2Ambiente < 800
                  ? "Normal"
                  : room.totalCO2Ambiente >= 800 && room.totalCO2Ambiente < 1400
                  ? "Alto"
                  : "Peligro"}
              </span>
            </h5>
          </div>
        </div>
        <div className="ppm-card">
          <h5 className="results-subtitle">
            Probabilidad de infección (por persona):
          </h5>
          <h1 className="results-ppm">
            {room.probabilidadDeInfeccion < 1
              ? room.probabilidadDeInfeccion.toFixed(3)
              : room.probabilidadDeInfeccion.toFixed(2)}
            %
          </h1>
          <div className="iprob-footer">
            <p className="info-text">
              ATENCIÓN: Tener en cuenta estas{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1eenE74xfR9j9YQl0wjXYZI1O_NH5KM1VskbnIZE8q0U/edit#gid=154529406&range=A93"
                target="_blank"
                rel="noreferrer"
              >
                consideraciones importantes
              </a>{" "}
              sobre la estimación calculada
            </p>
          </div>
        </div>
        <div className="ppm-card">
          <Sensor />
        </div>
      </div>
    </div>
  );
}

function Sensor() {
  const { room } = useRoom();

  function cambiarMedidor(ppm) {
    var selector = 0;
    ppm < 800
      ? (selector = 0)
      : ppm >= 800 && ppm < 1400
      ? (selector = 1)
      : (selector = 2);

    switch (selector) {
      case 0:
        return (
          <img className="sensor-img" src={sensorNormal} alt="Sensor"></img>
        );
      case 1:
        return <img className="sensor-img" src={sensorAlto} alt="Sensor"></img>;
      case 2:
        return (
          <img className="sensor-img" src={sensorPeligro} alt="Sensor"></img>
        );
      default:
        return <img className="sensor-img" src={sensor} alt="Sensor"></img>;
    }
  }

  return (
    <div className="sensor-div">
      <span className="screen-result">
        {parseInt(room.totalCO2Ambiente)} ppm
      </span>
      {cambiarMedidor(room.totalCO2Ambiente)}
    </div>
  );
}
