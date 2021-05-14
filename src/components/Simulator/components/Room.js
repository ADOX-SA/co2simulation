import React from "react";
import { useRoom } from "../../../context/room-context";

// Imported assets ========================

import Student10 from "../../../assets/students/Estudiante10.svg";
//import Student9 from "../../../assets/students/Estudiante9.svg";
import Student8 from "../../../assets/students/Estudiante8.svg";
import Student7 from "../../../assets/students/Estudiante7.svg";
import Student6 from "../../../assets/students/Estudiante6.svg";
import Student5 from "../../../assets/students/Estudiante5.svg";
import Student4 from "../../../assets/students/Estudiante4.svg";
import Student3 from "../../../assets/students/Estudiante3.svg";
import Student2 from "../../../assets/students/Estudiante2.svg";
//import Student1 from "../../../assets/students/Estudiante1.svg";
//import Student0 from "../../../assets/students/Estudiante0.svg";
import Profesora from "../../../assets/people/Teacher.svg";
import EscritorioProfesora from "../../../assets/furniture/TeacherDesk.svg";
import Biblioteca from "../../../assets/furniture/Bookshelf.svg";
import BarbijoDeTela from "../../../assets/masks/BarbijoDeTela.svg";
import BarbijoQuirurgico from "../../../assets/masks/BarbijoQuirurgico.svg";
import BarbijoKN95 from "../../../assets/masks/BarbijoKN95.svg";
import VentCerradaD from "../../../assets/ventilation/VentCerradaD.svg";
import VentParcialD from "../../../assets/ventilation/VentParcialD.svg";
import VentAbiertaD from "../../../assets/ventilation/VentAbiertaD.svg";
import VentSystemD from "../../../assets/ventilation/VentSystemD.svg";

// ========================================

export default function Room(room) {
  return (
    <div className="room-container">
      <div className="room">
        <div className="room-floor floor-shadow">
          <Grid room={room} />
          <Walls />
        </div>
      </div>
    </div>
  );
}

function Grid(room) {
  return (
    <div className="room-grid">
      <Shelf />
      <StudentDesk tipo={Student6} />
      <StudentDesk tipo={Student2} />
      <StudentDesk tipo={Student3} />
      <Teacher />
      <StudentDesk tipo={Student4} />
      <StudentDesk tipo={Student5} />
      <StudentDesk tipo={Student6} />
      <StudentDesk tipo={Student7} />
      <StudentDesk tipo={Student8} inf={1} />
      <StudentDesk tipo={Student3} />
      <TeacherDesk />
      <StudentDesk tipo={Student10} />
      <StudentDesk tipo={Student2} />
      <StudentDesk tipo={Student5} />
    </div>
  );
}

function Walls() {
  const { room } = useRoom();

  return (
    <>
      <div className="left-wall wall">
        <Vent vent={room.ventilation} />
      </div>
      <div className="right-wall wall"></div>
    </>
  );
}

function Vent(props) {
  function getVentType(ventType) {
    switch (ventType) {
      default:
      case 0.1:
        return (
          <img
            className="window-closed"
            src={VentCerradaD}
            alt="Ventilación"
          ></img>
        );
      case 3:
        return (
          <img
            className="window-parcial"
            src={VentParcialD}
            alt="Ventilación"
          ></img>
        );
      case 5:
        return (
          <img
            className="window-open"
            src={VentAbiertaD}
            alt="Ventilación"
          ></img>
        );
      case 7:
        return (
          <img
            className="window-system"
            src={VentSystemD}
            alt="Ventilación"
          ></img>
        );
    }
  }
  return (
    <div className="window-container window-wrapper">
      {getVentType(props.vent)}
    </div>
  );
}

function Shelf() {
  return (
    <div className="iso-element">
      <div className="shelf-wrapper">
        <img src={Biblioteca} alt="Biblioteca" />
      </div>
    </div>
  );
}

function StudentDesk(props) {
  const { room } = useRoom();

  return (
    <div
      className={props.inf === 1 ? "iso-element iso-infected" : "iso-element"}
    >
      <div className="iso-box">
        <div className="student-wrapper">
          <Mask maskType={room.maskEfficiency} />
          <img src={props.tipo} alt="Estudiante" />
        </div>
      </div>
    </div>
  );
}

function Mask(props) {
  function getMaskType(maskType) {
    switch (maskType) {
      case 0.5:
        return <img className="mask" src={BarbijoDeTela} alt="Barbijo"></img>;
      case 0.65:
        return (
          <img className="mask" src={BarbijoQuirurgico} alt="Barbijo"></img>
        );
      case 0.9:
        return <img className="mask" src={BarbijoKN95} alt="Barbijo"></img>;
      case 0:
      default:
        return <></>;
    }
  }
  return getMaskType(props.maskType);
}

function Teacher() {
  return (
    <div className="iso-element doble">
      <div className="people-wrapper">
        <img src={Profesora} alt="Profesora" />
      </div>
    </div>
  );
}
function TeacherDesk() {
  return (
    <div className="iso-element">
      <div className="iso-box">
        <div className="desk-wrapper">
          <img src={EscritorioProfesora} alt="Escritorio de profesora" />
        </div>
      </div>
    </div>
  );
}
