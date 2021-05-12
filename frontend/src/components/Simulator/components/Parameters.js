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
        {/* <PeopleSlider min={1} max={12} label="personas" /> */}
        <DurationSlider min={1} max={9} label="duración" unit="hr" />
        <MaskSelector />
        <VentilationSelector />
      </div>
    </div>
  );
}

/* function PeopleSlider({ min, max, label, unit }) {
  const { room, setRoom } = useRoom();

  const handleOnChange = (e) => {
    setRoom({ ...room, people: e.target.value });
  };

  return (
    <div className="range shadow">
      <div className="slider-info">
        <span className="slider-value">
          {room.people}
          {unit}
        </span>
        <span className="slider-label">{label}</span>
      </div>
      <div className="field">
        <input
          type="range"
          min={min}
          max={max}
          value={room.people}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
} */

function DurationSlider({ min, max, label, unit }) {
  const { room, setRoom } = useRoom();

  const handleOnChange = (e) => {
    setRoom({ ...room, duration: e.target.value });
  };

  return (
    <>
      <h5 className="slider-title">Duración de permanencia en ambiente:</h5>
      <div className="range shadow">
        <div className="slider-info">
          <span className="slider-value">
            {room.duration}
            {unit}
          </span>
          <span className="slider-label">{label}</span>
        </div>
        <div className="field">
          <input
            type="range"
            min={min}
            max={max}
            value={room.duration}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
}

function MaskSelector() {
  const [active, setActive] = useState(0);
  const { room, setRoom } = useRoom();

  const handleClick = (id) => {
    const { infecteds, infectedExhalation, maskPopulation } = room;
    var maskEff;

    setActive(id);
    switch (id) {
      default:
      case 0:
        maskEff = 0;
        break;
      case 1:
        maskEff = 0.5;
        break;
      case 2:
        maskEff = 0.65;
        break;
      case 3:
        maskEff = 0.9;
        break;
    }
    const netEmissionRate =
      infectedExhalation * (1 - maskEff * maskPopulation) * infecteds;
    setRoom({
      ...room,
      netEmissionRate: netEmissionRate,
      maskEfficiency: maskEff,
    });
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
  const [active, setActive] = useState(0);
  const { room, setRoom } = useRoom();

  const handleClick = (ventRate) => {
    const { netEmissionRate, roomVolumeM3, duration } = room;
    const NEWfirstOrderLoss = ventRate + 0.92; // ? Averiguar si esto está bien

    const avrConcentrationOfQuantas =
      (netEmissionRate / NEWfirstOrderLoss / roomVolumeM3) *
      (1 -
        (1 / NEWfirstOrderLoss / duration) *
          (1 - Math.exp(-NEWfirstOrderLoss * duration)));

    setActive(ventRate);
    setRoom({
      ...room,
      ventilation: ventRate,
      avrConcentrationOfQuantas: avrConcentrationOfQuantas,
      firstOrderLoss: NEWfirstOrderLoss,
    });
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
