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
      <div className="results-header">
        <h3 className="results-title">Resultados</h3>
      </div>
      <div className="results-wrapper">
        <div>
          <h5>
            Total CO<sub>2</sub> presente en el ambiente (partes por millón)
          </h5>
          <h1
            className={
              room.totalCO2Ambiente < 800
                ? "ppmOK"
                : room.totalCO2Ambiente >= 800 && room.totalCO2Ambiente < 1400
                ? "ppmAlto"
                : "ppmPeligro"
            }
          >
            {parseInt(room.totalCO2Ambiente)} ppm
          </h1>
        </div>
        <Sensor />
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
      {cambiarMedidor(room.totalCO2Ambiente)}
      <h4>
        Medidor de CO<sub>2</sub>
      </h4>
    </div>
  );
}
