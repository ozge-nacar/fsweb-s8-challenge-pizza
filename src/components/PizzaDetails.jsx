import React from "react";
import { Typography, Box } from "@mui/material";

function PizzaDetails() {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        mt: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Position Absolute Acı Pizza
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          85.50₺
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body1" color="text.secondary">
            4.9
          </Typography>
          <Typography variant="body1" color="text.secondary">
            (200)
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.7 }}
      >
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </Typography>
    </Box>
  );
}

export default PizzaDetails;
