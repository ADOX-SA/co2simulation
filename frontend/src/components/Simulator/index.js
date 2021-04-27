import React from "react";

// Imported assets ========================

import Student10 from "../../assets/students/Estudiante10.svg";
import Student9 from "../../assets/students/Estudiante9.svg";
import Student8 from "../../assets/students/Estudiante8.svg";
import Student7 from "../../assets/students/Estudiante7.svg";
import Student6 from "../../assets/students/Estudiante6.svg";
import Student5 from "../../assets/students/Estudiante5.svg";
import Student4 from "../../assets/students/Estudiante4.svg";
import Student3 from "../../assets/students/Estudiante3.svg";
import Student2 from "../../assets/students/Estudiante2.svg";
import Student1 from "../../assets/students/Estudiante1.svg";

// ========================================

export default function Simulator() {
  return (
    <div>
      <div className="menu">
        <h2>Why Is the Risk of Coronavirus Transmission so High Indoors?</h2>
        <p className="header-text">
          Whenever people gather in closed spaces, the infection risk climbs.
          Our interactive tool shows how the coronavirus spreads. Find out how
          safe your environment is.
        </p>
      </div>
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <>
      <div>
        <div className="wrapper">
          <Room />
          <Menu />
        </div>
      </div>
    </>
  );
}

function Room() {
  return (
    <div className="room-container">
      <div className="room">
        <div className="room-soil soil-shadow">
          <div className="room-grid">
            <div className="iso-element">Hi</div>
            <div className="iso-element">I'm</div>
            <div className="iso-element">an</div>
            <div className="iso-element">
              <div className="student-box">
                <div className="student-wrapper">
                  <img src={Student1} alt="Estudiante" />
                </div>
              </div>
            </div>
            <div className="iso-element">Hi</div>
            <div className="iso-element">I'm</div>
            <div className="iso-element">an</div>
            <div className="iso-element">element</div>
          </div>
          <div className="left-wall wall"></div>
          <div className="right-wall wall"></div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="room-parameters">
      <div className="parameters-header">
        <h5 className="parameters-title">Room parameters</h5>
      </div>
    </div>
  );
}
