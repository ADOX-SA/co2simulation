import React, { useState } from "react";
import { useRoom } from "../../../context/room-context";

// Imported assets
// Switch
import SelPeople from "../../../assets/room/SelPeople.svg";
import SelInfecteds from "../../../assets/room/SelInfecteds.svg";
import SelDuration from "../../../assets/room/SelDuration.svg";
import SelSurf from "../../../assets/room/SelSurface.svg";
import SelMask from "../../../assets/room/SelBarbijoNO.svg";
import SelVent from "../../../assets/room/VentCerrada.svg";
// Barbijos
import SelBarbijoNO from "../../../assets/masks/SelBarbijoNO.svg";
import SelBarbijoTela from "../../../assets/masks/SelBarbijoTela.svg";
import SelBarbijoQuirurgico from "../../../assets/masks/SelBarbijoQuirurgico.svg";
import SelBarbijoKN95 from "../../../assets/masks/SelBarbijoKN95.svg";
// Ventilación
import SelVentCerrada from "../../../assets/ventilation/SelVentCerrada.svg";
import SelVentParcial from "../../../assets/ventilation/SelVentParcial.svg";
import SelVentAbierta from "../../../assets/ventilation/SelVentAbierta.svg";
import SelVentSystem from "../../../assets/ventilation/SelVentSystem.svg";
// Volumen de habla
import SelBajo from "../../../assets/volume/SelSilencio.svg";
import SelNormal from "../../../assets/volume/SelNormal.svg";
import SelAlto from "../../../assets/volume/SelAlto.svg";
import SelGritando from "../../../assets/volume/SelGritando.svg";

export default function Parameters() {
  return (
    <>
      <div className="room-parameters">
        <div className="parameters-header">
          <h5 className="parameters-title">
            Parámetros interactivos del ambiente
          </h5>
        </div>
        <div className="controllers-div">
          <ParameterSwitch />
        </div>
        <div className="controllers-div">
          <Precondiciones />
        </div>
        <div className="results-footer">
          <p className="info-text">
            Versión prototipo (1.5), cualquier observación por favor contáctese
            vía mail a <a href="mailto:co2@adox.com.ar">co2@adox.com.ar</a>
          </p>
        </div>
      </div>
    </>
  );
}

function ParameterSwitch() {
  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <>
      <div className="mask-selector-div">
        <h5 className="slider-title">Seleccione el parámetro a modificar:</h5>
        <ol>
          <li
            className={0 === active ? "btn-selected" : null}
            onClick={() => handleClick(0)}
          >
            <ParameterBtn src={SelPeople} label="Personas" id={0} />
          </li>
          <li
            className={1 === active ? "btn-selected" : null}
            onClick={() => handleClick(1)}
          >
            <ParameterBtn src={SelInfecteds} label="Infectados" id={1} />
          </li>
          <li
            className={2 === active ? "btn-selected" : null}
            onClick={() => handleClick(2)}
          >
            <ParameterBtn src={SelDuration} label="Duración" id={2} />
          </li>
          <li
            className={6 === active ? "btn-selected" : null}
            onClick={() => handleClick(6)}
          >
            <ParameterBtn src={SelAlto} label="Volumen" id={6} />
          </li>
        </ol>
        <ol>
          <li
            className={3 === active ? "btn-selected" : null}
            onClick={() => handleClick(3)}
          >
            <ParameterBtn src={SelSurf} label="Superficie" id={3} />
          </li>
          <li
            className={4 === active ? "btn-selected" : null}
            onClick={() => handleClick(4)}
          >
            <ParameterBtn src={SelMask} label="Barbijo" id={4} />
          </li>
          <li
            className={5 === active ? "btn-selected" : null}
            onClick={() => handleClick(5)}
          >
            <ParameterBtn src={SelVent} label="Ventilación" id={5} />
          </li>
        </ol>
      </div>
      <ParameterDisplay show={active} />
    </>
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
  const { room, cambioBarbijo } = useRoom();
  const [active, setActive] = useState(room.eficienciaDeBarbijo);

  const handleClick = (id) => {
    switch (id) {
      default:
      case 0:
        cambioBarbijo(0);
        setActive(0);
        break;
      case 1:
        cambioBarbijo(0.5);
        setActive(0.5);
        break;
      case 2:
        cambioBarbijo(0.65);
        setActive(0.65);
        break;
      case 3:
        cambioBarbijo(0.9);
        setActive(0.9);
        break;
    }
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
          className={0.5 === active ? "btn-selected" : null}
          onClick={() => handleClick(1)}
        >
          <MaskBtn src={SelBarbijoTela} label="De tela" id={1} />
        </li>
        <li
          className={0.65 === active ? "btn-selected" : null}
          onClick={() => handleClick(2)}
        >
          <MaskBtn src={SelBarbijoQuirurgico} label="Quirúrgico" id={2} />
        </li>
        <li
          className={0.9 === active ? "btn-selected" : null}
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
  const { room, cambioVentilacion } = useRoom();
  const [active, setActive] = useState(room.ventilacion);

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

function ParameterDisplay(props) {
  const { room } = useRoom();

  const getParameterComponent = (id) => {
    switch (id) {
      case 0:
        return (
          <PeopleSlider
            min={room.infectados === 1 ? 2 : room.infectados}
            max={30}
            label="personas"
          />
        );
      case 1:
        return (
          <InfectedSlider
            min={1}
            max={room.totalPersonas <= 6 ? room.totalPersonas - 1 : 6}
            label="infectados"
          />
        );
      case 2:
        return <DurationSlider min={1} max={36} label="duración" unit="hr" />;
      case 3:
        return (
          <SurfaceSlider min={10} max={100} label="superficie" unit="m2" />
        );
      case 4:
        return <MaskSelector />;
      case 5:
        return <VentilationSelector />;
      case 6:
        return <VolumeSelector />;
      default:
        return <></>;
    }
  };
  return <>{getParameterComponent(props.show)}</>;
}
function ParameterBtn(props) {
  return (
    <div>
      <img src={props.src} alt="Seleccione parámetro a modificar:"></img>
      <p>{props.label}</p>
    </div>
  );
}

function Precondiciones() {
  const { room } = useRoom();

  return (
    <div className="precondiciones">
      <h5 className="slider-title">
        Parámetros del ambiente utilizados para la simulación:
      </h5>
      <p className="results-def">
        Cantidad de personas: {room.profesores + room.alumnos}
      </p>
      <p className="results-def">
        Infectados (paciente cero): {room.infectados}
      </p>
      <p className="results-def">
        Habitación: {room.alturaHabitacion}m (alto), {room.superficie}m
        <sup>2</sup> (superficie), {room.volumenHabitacion.toFixed(2)}m
        <sup>3</sup> (volumen total).
      </p>
      <p className="results-def">
        Separación entre personas: Distribuidas por toda la superficie de manera
        equidistante.
      </p>
      <p className="results-def">
        Se considera que las personas se encuentran sentadas y{" "}
        {room.exhalacionDeInfectado > 30
          ? "gritando"
          : room.exhalacionDeInfectado > 9.4
          ? "hablando con volumen alto"
          : room.exhalacionDeInfectado > 2
          ? "hablando con volumen normal"
          : "hablando con volumen bajo"}
        .
      </p>
      <p className="results-def">
        Todos los cálculos se basan en el{" "}
        <a href="https://cires.colorado.edu/news/covid-19-airborne-transmission-tool-available">
          modelo de estimación de CIRES
        </a>
        .
      </p>
      <p className="results-def">El sensor mide hasta 5000ppm.</p>
    </div>
  );
}

function VolumeSelector() {
  const { room, cambioVolumen } = useRoom();
  const [active, setActive] = useState(room.exhalacionDeInfectado);

  const handleClick = (volumen) => {
    setActive(volumen);
    cambioVolumen(volumen);
  };
  return (
    <div className="mask-selector-div">
      <h5>Selector de volumen:</h5>
      <ol>
        <li
          className={2 === active ? "btn-selected" : null}
          onClick={() => handleClick(2)}
        >
          <VentBtn src={SelBajo} label="Tranquilo" id={0} />
        </li>
        <li
          className={9.4 === active ? "btn-selected" : null}
          onClick={() => handleClick(9.4)}
        >
          <VentBtn src={SelNormal} label="Normal" id={1} />
        </li>
        <li
          className={30 === active ? "btn-selected" : null}
          onClick={() => handleClick(30)}
        >
          <VentBtn src={SelAlto} label="Alto" id={2} />
        </li>
        <li
          className={60 === active ? "btn-selected" : null}
          onClick={() => handleClick(60)}
        >
          <VentBtn src={SelGritando} label="Gritando" id={3} />
        </li>
      </ol>
    </div>
  );
}
