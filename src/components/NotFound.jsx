import React from "react";

function NotFound() {
  console.error("404 - Sayfa Bulunamadı");

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "4rem",
        marginTop: "4rem",
        color: "gray",
        fontSize: "36px",
      }}
    >
      <h1>404</h1>
      <h2>Sayfa bulunamadı</h2>
      <p>Aradığınız sayfa mevcut değil.</p>
    </div>
  );
}

export default NotFound;
