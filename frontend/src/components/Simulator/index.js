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
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <>
      <div className="menu">
        <h3>Why Is the Risk of Coronavirus Transmission so High Indoors?</h3>
        <p className="header-text">
          Whenever people gather in closed spaces, the infection risk climbs.
          Our interactive tool shows how the coronavirus spreads. Find out how
          safe your environment is.
        </p>
      </div>
      <div className="wrapper">
        <div className="room">
          <div className="room-soil soil-shadow">
            <div className="left-wall wall"></div>
            <div className="right-wall wall"></div>
            {/* <div className="student"></div>
          <div className="student"></div>
          <div className="student"></div>
          <div className="student"></div>
          <div className="student">
            <img src={Student9} alt="Estudiante 9"></img>
          </div>
          <div className="student">
            <img src={Student10} alt="Estudiante 10"></img>
          </div>
          <div className="student">
            <img src={Student1} alt="Estudiante 1"></img>
          </div>
          <div className="student">
            <img src={Student2} alt="Estudiante 2"></img>
          </div>
          <div className="student">
            <img src={Student3} alt="Estudiante 3"></img>
          </div>
          <div className="student">
            <img src={Student4} alt="Estudiante 4"></img>
          </div>
          <div className="student">
            <img src={Student5} alt="Estudiante 5"></img>
          </div>
          <div className="student">
            <img src={Student6} alt="Estudiante 6"></img>
          </div>
          <div className="student">
            <img src={Student7} alt="Estudiante 7"></img>
          </div>
          <div className="student">
            <img src={Student8} alt="Estudiante 8"></img>
          </div>
          <div className="student">
            <img src={Student9} alt="Estudiante 9"></img>
          </div>
          <div className="student">
            <img src={Student10} alt="Estudiante 10"></img>
          </div> */}
          </div>
        </div>
        <div className="menu">Menu</div>
      </div>
    </>
  );
}
