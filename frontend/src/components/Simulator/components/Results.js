import React from "react";
import { useRoom } from "../../../context/room-context";

// Imported assets
import sensor from "../../../assets/sensor/Sensor.svg";
import sensorConectando from "../../../assets/sensor/SensorConectando.svg";
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
        <div className="sensor-div">
          <img className="sensor-img" src={sensorAlto} alt="Sensor" />
          <h4>
            Medidor de CO<sub>2</sub>
          </h4>
        </div>
      </div>
    </div>
  );
}
