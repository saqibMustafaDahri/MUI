import React from "react";
import { Button, Grid } from "@mui/material";
function CalcButton({ label, color = "primary", onClick }) {
  return (
    <Grid item xs={3}>
      <Button variant="contained" color={color} onClick={() => onClick(label)} sx={{transition: "all 0.15s ease-in-out","&:active": {backgroundColor: "#1976d2",transform: "scale(0.95)",},}}>
        {label}
      </Button>
    </Grid>
  );
}

export default CalcButton;
