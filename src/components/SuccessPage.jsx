import React from "react";
import Footer from "./Footer";
import "./SuccesPage.css";

function SuccessPage({ orderData }) {
  if (!orderData) {
    return <p>Hata: Sipariş verisi bulunamadı</p>;
  }

  return (
    <div className="container-success">
      <div className="page">
        <h2 class="logo">Teknolojik Yemekler</h2>
        <p class="subtitle">lezzetin yolda</p>
        <h1 className="title">SİPARİŞ ALINDI!</h1>

        <hr />
        <div className="order-summary">
          <h2>Position Absolute Acı Pizza</h2>
          <p>
            Boyut: <strong>{orderData.size}</strong>
          </p>
          <p>
            Hamur: <strong>{orderData.dough}</strong>
          </p>
          <p>
            Ekstra Malzemeler: <strong>{orderData.extras.join(", ")} </strong>
          </p>
        </div>

        <div className="totalSiparis">
          <h3>Sipariş Toplamı</h3>
          <p>
            Seçimler:
            {orderData.extrasTotal}₺
          </p>
          <p>Toplam: {orderData.totalPrice}₺</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SuccessPage;
