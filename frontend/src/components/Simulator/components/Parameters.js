import React, { useState } from "react";

export default function Parameters() {
  return (
    <div className="room-parameters">
      <div className="parameters-header">
        <h5 className="parameters-title">Room parameters</h5>
      </div>
      <div className="controllers-div">
        <Slider />
        <Slider />
      </div>
    </div>
  );
}

function Slider() {
  const [valor, setValor] = useState({ value: 0 });

  const slideValue = document.querySelector("span");

  const handleOnChange = (e) => {
    setValor({ value: e.target.value });
  };

  return (
    <div className="range shadow">
      <div className="slider-value">
        <span>{valor.value}</span>
      </div>
      <div className="field">
        <div className="value left">0</div>
        <input
          type="range"
          min="0"
          max="12"
          value={valor.value}
          onChange={handleOnChange}
        />
        <div className="value right">200</div>
      </div>
    </div>
  );
}
