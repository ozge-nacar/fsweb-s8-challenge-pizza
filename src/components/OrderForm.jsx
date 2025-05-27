import React from "react";
import SizeSelector from "./SizeSelector";

function OrderForm() {
  return (
    <div>
      <SizeSelector size={size} setSize={setSize} />
    </div>
  );
}

export default OrderForm;
