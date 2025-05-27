import React from "react";
import { useState } from "react";

function DoughSelector() {
  const [dough, setDough] = useState("");

  const handleChange = (event) => {
    setDough(event.target.value);
  };

  return (
    <div>
      <h3>
        Hamur Seç <span style={{ color: "red" }}>*</span>
      </h3>
      <select value={dough} onChange={handleChange}>
        <option value="">Hamur Kalınlığı</option>
        <option value="İnce">İnce</option>
        <option value="Normal">Normal</option>
        <option value="Kalın">Kalın</option>
      </select>
    </div>
  );
}

export default DoughSelector;
