import React from "react";
import { Grid, Button } from "@mui/material";
import CalcButton from "./CalcButton";
function ButtonGrid({ onClick }) {
  const buttons = ["7", "8", "9", "/","4", "5", "6", "*","1", "2", "3", "-","0", ".", "=", "+"];

  return (
    <Grid container spacing={1}>
      {buttons.map((btn) => (
        <CalcButton key={btn}label={btn}
          color={
            ["+", "-", "*", "/", "="].includes(btn)? "warning": btn === "C"? "error": "primary"
          }onClick={onClick}/>
      ))}
      <Grid item xs={12}>
        <Button variant="contained"color="error"onClick={() => onClick("Backspace")}
          sx={{transition: "all 0.15s ease-in-out","&:active": {backgroundColor: "#1976d2",transform: "scale(0.95)",},}}>Clear</Button>
      </Grid>
    </Grid>
  );
}

export default ButtonGrid;
