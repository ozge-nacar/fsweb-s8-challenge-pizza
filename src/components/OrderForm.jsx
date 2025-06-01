import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import PizzaDetails from "./PizzaDetails";
import SizeSelector from "./SizeSelector";
import DoughSelector from "./DoughSelector";
import ExtraIngredients from "./ExtraIngredients";
import UserNote from "./UserNote";
import NameInput from "./NameInput";
import OrderSummary from "./OrderSummary";
import axios from "axios";
import { useHistory } from "react-router-dom";

function OrderForm({ setOrderData }) {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [selected, setSelected] = useState([]);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const history = useHistory();

  const isFormValid = () => {
    return (
      name.trim().length >= 3 &&
      size &&
      dough &&
      selected.length >= 3 &&
      selected.length <= 10
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Lütfen tüm alanları doğru doldurun.");
      return;
    }

    const basePrice = 85.5;
    const extraPrice = 5;
    const extrasTotal = selected.length * extraPrice;
    const totalPrice = (basePrice + extrasTotal) * count;

    const siparis = {
      name,
      size,
      dough,
      extras: selected,
      note,
      count,
      extrasTotal,
      totalPrice,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        siparis,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log("API yanıtı:", response.data);
      setOrderData(siparis);
      setTimeout(() => {
        history.push("/success");
      }, 100);
    } catch (error) {
      console.error("HATA: Sipariş gönderilemedi", error);
    }
  };

  return (
    <Box>
      <Header />
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            maxWidth: "500px",
            mx: "auto",
            my: 4,
            px: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <PizzaDetails />

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <SizeSelector size={size} setSize={setSize} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DoughSelector dough={dough} setDough={setDough} />
            </Grid>
          </Grid>

          <ExtraIngredients selected={selected} setSelected={setSelected} />
          <NameInput name={name} setName={setName} />
          <UserNote note={note} setNote={setNote} />

          <hr />

          <OrderSummary
            selected={selected}
            count={count}
            setCount={setCount}
            size={size}
            name={name}
            dough={dough}
            isFormValid={isFormValid}
          />
        </Box>
      </form>
    </Box>
  );
}

export default OrderForm;
