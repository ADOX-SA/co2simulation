import React from "react";

// Imported assets
import sensor from "../../../assets/sensor/Sensor.svg";
import sensorConectando from "../../../assets/sensor/SensorConectando.svg";
import sensorNormal from "../../../assets/sensor/SensorNormal.svg";
import sensorAlto from "../../../assets/sensor/SensorAlto.svg";
import sensorPeligro from "../../../assets/sensor/SensorPeligro.svg";

export default function Results() {
  return (
    <div className="results-card">
      <div className="results-header">
        <h3 className="results-title">Resultados</h3>
      </div>
      <div className="results-wrapper">
        <div>
          <h5>Resultados</h5>
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
