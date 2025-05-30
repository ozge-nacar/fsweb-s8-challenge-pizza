import React from "react";
import Footer from "./Footer";
import "./SuccesPage.css";

function SuccessPage({ orderData }) {
  if (!orderData) {
    return <p>Hata: Sipariş verisi bulunamadı</p>;
  }

  return (
    <div className="container-success">
      <div className="success-page">
        <h1 className="success-title">SİPARİŞ ALINDI!</h1>

        <hr />
        <div className="order-summary">
          <h2>Position Absolute Acı Pizza</h2>
          <p>
            <strong>Boyut:</strong> {orderData.size}
          </p>
          <p>
            <strong>Hamur:</strong> {orderData.dough}
          </p>
          <p>
            <strong>Ekstra Malzemeler:</strong> {orderData.extras.join(", ")}
          </p>
        </div>
        <div className="totalSiparis">
          <h3>Sipariş Toplamı</h3>
          <p>
            <strong>Seçimler:</strong>
            {orderData.extrasTotal}₺
          </p>
          <p>
            <strong>Toplam:</strong> {orderData.totalPrice}₺
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SuccessPage;
