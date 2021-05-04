import React from "react";

// Imported assets ========================

/* import Student10 from "../../../assets/students/Estudiante10.svg";
import Student9 from "../../../assets/students/Estudiante9.svg";
import Student8 from "../../../assets/students/Estudiante8.svg";
import Student7 from "../../../assets/students/Estudiante7.svg";
import Student6 from "../../../assets/students/Estudiante6.svg";
import Student5 from "../../../assets/students/Estudiante5.svg";
import Student4 from "../../../assets/students/Estudiante4.svg";
import Student3 from "../../../assets/students/Estudiante3.svg";
import Student2 from "../../../assets/students/Estudiante2.svg"; */
import Student1 from "../../../assets/students/Estudiante1.svg";
//import Student0 from "../../../assets/students/Estudiante0.svg";
import Profesora from "../../../assets/people/Teacher.svg";
import EscritorioProfesora from "../../../assets/furniture/TeacherDesk.svg";
import Biblioteca from "../../../assets/furniture/Bookshelf.svg";
import BarbijoDeTela from "../../../assets/masks/BarbijoDeTela.svg";
import BarbijoQuirurgico from "../../../assets/masks/BarbijoQuirurgico.svg";
import BarbijoKN95 from "../../../assets/masks/BarbijoKN95.svg";

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
      <StudentDesk />
      <StudentDesk />
      <StudentDesk />
      <Teacher />
      <StudentDesk />
      <StudentDesk />
      <StudentDesk />
      <StudentDesk />
      <StudentDesk />
      <StudentDesk />
      <TeacherDesk />
      <StudentDesk />
      <StudentDesk />
      <StudentDesk />
    </div>
  );
}

function Walls() {
  return (
    <>
      <div className="left-wall wall"></div>
      <div className="right-wall wall"></div>
    </>
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

function StudentDesk() {
  return (
    <div className="iso-element">
      <div className="iso-box">
        <div className="student-wrapper">
          <Mask maskType={0} />
          <img src={Student1} alt="Estudiante" />
        </div>
      </div>
    </div>
  );
}

function Mask(maskType) {
  console.log(maskType);

  function getMaskType(maskType) {
    switch (maskType) {
      case 1:
        return <img className="mask" src={BarbijoDeTela} alt="Barbijo"></img>;
      case 2:
        return (
          <img className="mask" src={BarbijoQuirurgico} alt="Barbijo"></img>
        );
      case 3:
        return <img className="mask" src={BarbijoKN95} alt="Barbijo"></img>;
      case 0:
      default:
        return <></>;
    }
  }
  return getMaskType(maskType.maskType);
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
