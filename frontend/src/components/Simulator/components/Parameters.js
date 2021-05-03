import React, { useState } from "react";

export default function Parameters() {
  return (
    <div className="room-parameters">
      <div className="parameters-header">
        <h5 className="parameters-title">Room parameters</h5>
      </div>
      <div className="controllers-div">
        <Slider min={1} max={12} label="people" />
        <Slider min={1} max={9} label="duration" unit="hr" />
      </div>
    </div>
  );
}

function Slider({ min, max, label, unit }) {
  const [value, setValue] = useState({ value: 1 });

  const handleOnChange = (e) => {
    setValue({ value: e.target.value });
  };

  return (
    <div className="range shadow">
      <div className="slider-info">
        <span className="slider-value">
          {value.value}
          {unit}
        </span>
        <span className="slider-label">{label}</span>
      </div>
      <div className="field">
        <input
          type="range"
          min={min}
          max={max}
          value={value.value}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
