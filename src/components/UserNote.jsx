import React from "react";
import { TextField, Typography, Box } from "@mui/material";

function UserNote({ note, setNote }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Sipariş Notu
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        value={note}
        inputProps={{ "data-cy": "order-note" }}
        onChange={(e) => setNote(e.target.value)}
        required={false}
      />
    </Box>
  );
}

export default UserNote;
