import React from "react";
import { Typography, Box, FormControlLabel, Checkbox } from "@mui/material";

const ingredientsList = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
  "Sucuk",
];

export default function ExtraIngredients({ selected, setSelected }) {
  const handleChange = (event) => {
    const value = event.target.value;

    if (selected.includes(value)) {
      if (selected.length <= 3) {
        alert("En az 3 malzeme seçmelisiniz.");
        setSelected([]);
        return;
      }
      setSelected(selected.filter((item) => item !== value));
    } else {
      if (selected.length >= 10) {
        alert("En fazla 10 malzeme seçebilirsiniz.");
        setSelected([]);
        return;
      }
      setSelected([...selected, value]);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Ek Malzemeler
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        En Fazla 10 malzeme seçebilirsiniz. 5₺
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          rowGap: 2,
        }}
      >
        {ingredientsList.map((ingredient, index) => (
          <Box key={index} sx={{ width: "25%" }}>
            <FormControlLabel
              control={
                <Checkbox
                  value={ingredient}
                  checked={selected.includes(ingredient)}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label={
                <Typography fontSize="0.875rem" fontWeight="500">
                  {ingredient}
                </Typography>
              }
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
