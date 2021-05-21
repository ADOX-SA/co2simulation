import React, { useState } from "react";
import { useRoom } from "../../../context/room-context";

// Imported assets
// Barbijos
import SelBarbijoNO from "../../../assets/masks/SelBarbijoNO.svg";
import SelBarbijoTela from "../../../assets/masks/SelBarbijoTela.svg";
import SelBarbijoQuirurgico from "../../../assets/masks/SelBarbijoQuirurgico.svg";
import SelBarbijoKN95 from "../../../assets/masks/SelBarbijoKN95.svg";
// ventilación
import SelVentCerrada from "../../../assets/ventilation/SelVentCerrada.svg";
import SelVentParcial from "../../../assets/ventilation/SelVentParcial.svg";
import SelVentAbierta from "../../../assets/ventilation/SelVentAbierta.svg";
import SelVentSystem from "../../../assets/ventilation/SelVentSystem.svg";

export default function Parameters() {
  return (
    <div className="room-parameters">
      <div className="parameters-header">
        <h5 className="parameters-title">Parámetros del ambiente</h5>
      </div>
      <div className="controllers-div">
        <PeopleSlider min={12} max={26} label="personas" />
        <InfectedSlider min={1} max={6} label="infectados" />
        <DurationSlider min={1} max={36} label="duración" unit="hr" />
        <SurfaceSlider min={10} max={100} label="superficie" unit="m2" />
        <MaskSelector />
        <VentilationSelector />
      </div>
    </div>
  );
}

function PeopleSlider({ min, max, label, unit }) {
  const { room, cambioPersonas } = useRoom();

  const handleOnChange = (e) => {
    cambioPersonas(e.target.value);
  };

  return (
    <>
      <h5 className="slider-title">
        Cantidad de personas (1 profesor + {room.alumnos} estudiantes):
      </h5>
      <div className="range shadow">
        <div className="slider-info">
          <span className="slider-value">
            {room.totalPersonas}
            {unit}
          </span>
          <span className="slider-label">{label}</span>
        </div>
        <div className="field">
          <input
            type="range"
            min={min}
            max={max}
            value={room.alumnos + room.profesores}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
}

function InfectedSlider({ min, max, label, unit }) {
  const { room, cambioInfectados } = useRoom();

  const handleOnChange = (e) => {
    cambioInfectados(e.target.value);
  };

  return (
    <>
      <h5 className="slider-title">
        Cantidad de personas infectadas (paciente cero):
      </h5>
      <div className="range shadow">
        <div className="slider-info">
          <span className="slider-value">{room.infectados}</span>
          <span className="slider-label">
            {room.infectados < 2 ? "infectado" : "infectados"}
          </span>
        </div>
        <div className="field">
          <input
            type="range"
            min={min}
            max={max}
            value={room.infectados}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
}

function DurationSlider({ min, max, label, unit }) {
  const { room, cambioDuracion } = useRoom();

  const handleOnChange = (e) => {
    cambioDuracion(e.target.value);
  };

  return (
    <>
      <h5 className="slider-title">Duración de permanencia en ambiente:</h5>
      <div className="range shadow">
        <div className="slider-info">
          <span className="slider-value">
            {room.duracion < 1 ? room.duracion * 60 : room.duracion}
            {room.duracion < 1 ? "min" : "hr"}
          </span>
          <span className="slider-label">{label}</span>
        </div>
        <div className="field">
          <input
            type="range"
            min={min}
            max={max}
            value={room.duracion * 4}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
}

function SurfaceSlider({ min, max, label, unit }) {
  const { room, cambioSuperficie } = useRoom();

  const handleOnChange = (e) => {
    cambioSuperficie(e.target.value);
  };

  return (
    <>
      <h5 className="slider-title">
        Superficie del ambiente en metros cuadrados:
      </h5>
      <div className="range shadow">
        <div className="slider-info">
          <span className="slider-value">
            {room.superficie}
            {unit}
          </span>
          <span className="slider-label">{label}</span>
        </div>
        <div className="field">
          <input
            type="range"
            min={min}
            max={max}
            value={room.superficie}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
}

function MaskSelector() {
  const [active, setActive] = useState(0);
  const { cambioBarbijo } = useRoom();

  const handleClick = (id) => {
    var eficienciaDeBarbijo;

    setActive(id);
    switch (id) {
      default:
      case 0:
        eficienciaDeBarbijo = 0;
        break;
      case 1:
        eficienciaDeBarbijo = 0.5;
        break;
      case 2:
        eficienciaDeBarbijo = 0.65;
        break;
      case 3:
        eficienciaDeBarbijo = 0.9;
        break;
    }
    cambioBarbijo(eficienciaDeBarbijo);
  };

  return (
    <div className="mask-selector-div">
      <h5>Selector de barbijo:</h5>
      <ol>
        <li
          className={0 === active ? "btn-selected" : null}
          onClick={() => handleClick(0)}
        >
          <MaskBtn src={SelBarbijoNO} label="Ninguno" id={0} />
        </li>
        <li
          className={1 === active ? "btn-selected" : null}
          onClick={() => handleClick(1)}
        >
          <MaskBtn src={SelBarbijoTela} label="De tela" id={1} />
        </li>
        <li
          className={2 === active ? "btn-selected" : null}
          onClick={() => handleClick(2)}
        >
          <MaskBtn src={SelBarbijoQuirurgico} label="Quirúrgico" id={2} />
        </li>
        <li
          className={3 === active ? "btn-selected" : null}
          onClick={() => handleClick(3)}
        >
          <MaskBtn src={SelBarbijoKN95} label="N95" id={3} />
        </li>
      </ol>
    </div>
  );
}

function MaskBtn(props) {
  return (
    <div>
      <img src={props.src} alt="Selector de barbijo"></img>
      <p>{props.label}</p>
    </div>
  );
}

function VentilationSelector() {
  const [active, setActive] = useState(0.1);
  const { cambioVentilacion } = useRoom();

  const handleClick = (ventRate) => {
    setActive(ventRate);
    cambioVentilacion(ventRate);
  };

  return (
    <div className="mask-selector-div">
      <h5>Selector de ventilación:</h5>
      <ol>
        <li
          className={0.1 === active ? "btn-selected" : null}
          onClick={() => handleClick(0.1)}
        >
          <VentBtn src={SelVentCerrada} label="Ninguna" id={0} />
        </li>
        <li
          className={3 === active ? "btn-selected" : null}
          onClick={() => handleClick(3)}
        >
          <VentBtn src={SelVentParcial} label="Parcial" id={1} />
        </li>
        <li
          className={5 === active ? "btn-selected" : null}
          onClick={() => handleClick(5)}
        >
          <VentBtn src={SelVentAbierta} label="Total" id={2} />
        </li>
        <li
          className={7 === active ? "btn-selected" : null}
          onClick={() => handleClick(7)}
        >
          <VentBtn src={SelVentSystem} label="Sistema" id={3} />
        </li>
      </ol>
    </div>
  );
}

function VentBtn(props) {
  return (
    <div>
      <img src={props.src} alt="Selector de ventilación"></img>
      <p>{props.label}</p>
    </div>
  );
}
