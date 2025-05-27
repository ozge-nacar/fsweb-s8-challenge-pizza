import React from "react";
import { useState } from "react";
import "../CSS/SizeSelector.css";
function SizeSelector() {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="size-selector">
      <label className="Boyut">
        Boyut Seç: <span style={{ color: "red" }}>*</span>
      </label>
      <div>
        <label>
          <input
            type="radio"
            value="Küçük"
            checked={size === "Küçük"}
            onChange={handleChange}
          />
          Küçük
        </label>
        <label>
          <input
            type="radio"
            value="Orta"
            checked={size === "Orta"}
            onChange={handleChange}
          />
          Orta
        </label>
        <label>
          <input
            type="radio"
            value="Büyük"
            checked={size === "Büyük"}
            onChange={handleChange}
          />
          Büyük
        </label>
      </div>
    </div>
  );
}

export default SizeSelector;
