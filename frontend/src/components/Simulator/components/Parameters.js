import React, { useState } from "react";

export default function Parameters() {
  const [peopleSlider1, setPeopleSlider1] = useState({
    value: 1,
    min: 1,
    max: 12,
    label: "people",
  });

  return (
    <div className="room-parameters">
      <div className="parameters-header">
        <h5 className="parameters-title">Room parameters</h5>
      </div>
      <div className="controllers-div">
        <Slider slider={peopleSlider1} setSlider={setPeopleSlider1} />
      </div>
    </div>
  );
}

function Slider({ slider, setSlider }) {
  const handleOnChange = (e) => {
    setSlider({ value: e.target.value });
  };

  return (
    <div className="range shadow">
      <div className="slider-value">
        <span>{slider.value}</span>
      </div>
      <div className="field">
        <input
          type="range"
          min={slider.min}
          max={slider.max}
          value={slider.value}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
