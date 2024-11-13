import React, { useState } from "react";
import "../style/DoubleSlider.css";

const DoubleSlider = ({ minLimit = 0, maxLimit = 100, unit = "" }) => {
  const [minValue, setMinValue] = useState(minLimit);
  const [maxValue, setMaxValue] = useState(maxLimit);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="double-slider-box">
      <div className="input-box">
        <div className="min-box">
          <span>{minValue} {unit}</span>
        </div>
        <div className="max-box">
          <span>{maxValue} {unit}</span>
        </div>
      </div>
      <div className="range-slider">
        <div className="slider-track" style={{ left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`, width: `${((maxValue - minValue) / (maxLimit - minLimit)) * 100}%`,}}></div>
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className="min-range"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className="max-range"
        />
      </div>
    </div>
  );
};

export default DoubleSlider;
