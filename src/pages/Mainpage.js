import React from "react";

// Imported components
import Simulator from "../components/Simulator";
import Header from "../components/Header";
import Information from "../components/Information";

export default function Mainpage() {
  return (
    <div>
      <Header />
      <Simulator />
      <Information />
    </div>
  );
}
