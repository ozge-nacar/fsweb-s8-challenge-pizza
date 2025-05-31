import React from "react";
import Button from "@mui/material/Button";

export default function OrderSummary({ selected, count, setCount }) {
  const basePrice = 85.5;
  const extraPrice = 5;
  const extrasTotal = selected.length * extraPrice;
  const totalPrice = (basePrice + extrasTotal) * count;

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          border: "1px solid #ccc",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <button
          onClick={decrease}
          type="button"
          style={{
            backgroundColor: "#FFC107",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <div
          style={{
            padding: "10px 15px",
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
            minWidth: "30px",
            textAlign: "center",
          }}
        >
          {count}
        </div>
        <button
          onClick={increase}
          type="button"
          style={{
            backgroundColor: "#FFC107",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          minWidth: "200px",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Sipariş Toplamı</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0.5rem 0",
          }}
        >
          <span>Seçimler</span>
          <span>{extrasTotal.toFixed(2)}₺</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "red",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          <span>Toplam</span>
          <span>{totalPrice.toFixed(2)}₺</span>
        </div>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "#FFC107",
            color: "#000",
            "&:hover": {
              backgroundColor: "#e6ac00",
            },
          }}
        >
          SİPARİŞ VER
        </Button>
      </div>
    </div>
  );
}
