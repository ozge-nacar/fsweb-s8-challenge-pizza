import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  Select,
} from "@mui/material";

function DoughSelector({ dough, setDough }) {
  return (
    <FormControl fullWidth>
      <FormLabel
        sx={{ fontWeight: 600, color: "black", fontSize: "1rem", mb: 1 }}
      >
        Hamur Seç <span style={{ color: "red" }}>*</span>
      </FormLabel>
      <Select
        value={dough}
        onChange={(e) => setDough(e.target.value)}
        displayEmpty
        sx={{
          color: "black",
          border: "1px solid black",
          borderRadius: "4px",
          "& fieldset": {
            borderColor: "black",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        }}
      >
        <MenuItem value="">Hamur Kalınlığı</MenuItem>
        <MenuItem value="Süper İnce">Süper İnce</MenuItem>
        <MenuItem value="İnce">İnce</MenuItem>
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="Kalın">Kalın</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DoughSelector;
