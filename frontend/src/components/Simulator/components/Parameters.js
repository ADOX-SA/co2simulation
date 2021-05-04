import React from "react";
import { useRoom } from "../../../context/room-context";

// Imported assets
import SelBarbijoNO from "../../../assets/masks/SelBarbijoNO.svg";
import SelBarbijoTela from "../../../assets/masks/SelBarbijoTela.svg";
import SelBarbijoQuirurgico from "../../../assets/masks/SelBarbijoQuirurgico.svg";
import SelBarbijoKN95 from "../../../assets/masks/SelBarbijoKN95.svg";

export default function Parameters() {
  return (
    <div className="room-parameters">
      <div className="parameters-header">
        <h5 className="parameters-title">Room parameters</h5>
      </div>
      <div className="controllers-div">
        <PeopleSlider min={1} max={12} label="people" />
        <DurationSlider min={1} max={9} label="duration" unit="hr" />
        <MaskSelector />
      </div>
    </div>
  );
}

function PeopleSlider({ min, max, label, unit }) {
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
}

function DurationSlider({ min, max, label, unit }) {
  const { room, setRoom } = useRoom();

  const handleOnChange = (e) => {
    setRoom({ ...room, duration: e.target.value });
  };

  return (
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
  );
}

function MaskSelector() {
  return (
    <div>
      <MaskBtn src={SelBarbijoNO} />
      <MaskBtn src={SelBarbijoTela} />
      <MaskBtn src={SelBarbijoQuirurgico} />
      <MaskBtn src={SelBarbijoKN95} />
    </div>
  );
}

function MaskBtn(src) {
  return (
    <button className="mask-selector-btn">
      <img src={src.src} alt="Selector de barbijo"></img>
    </button>
  );
}
