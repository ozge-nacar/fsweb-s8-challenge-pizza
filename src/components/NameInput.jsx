import React from "react";
import { TextField, Typography, Box } from "@mui/material";

function NameInput({ name, setName }) {
  const isError = name.length > 0 && name.length < 3;

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        İsim
      </Typography>

      <TextField
        fullWidth
        multiline
        placeholder="İsim Giriniz"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={isError}
        helperText={isError ? "İsim en az 3 karakter olmalıdır." : ""}
        inputProps={{ "data-cy": "nameInput" }}
      />
    </Box>
  );
}

export default NameInput;
