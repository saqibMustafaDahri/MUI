import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Paper, Typography } from "@mui/material";
import HistoryIcon from '@mui/icons-material/History';
function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (/^[0-9+\-*/.]$/.test(key)) {
        setInput((prev) => prev + key);
      } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        try {
          const result = eval(input).toString();
          setHistory((prev) => [...prev, `${input} = ${result}`]);
          setInput(result);
        } catch {
          setInput("Error");
        }
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape" || key.toLowerCase() === "c") {
        setInput("");
      } else if (key.toLowerCase() === "h") {
        setShowHistory((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);
  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input).toString();
        setHistory((prev) => [...prev, `${input} = ${result}`]);
        setInput(result);
      } catch {
        setInput("Error");
      }
    } else if (value === "Backspace") {
      setInput("");
    } else if (value === "h") {
      setShowHistory((prev) => !prev);
    } else {
      setInput(input + value);
    }
  };
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
  return (
    <div style={{ position: "relative" }}>
      <Paper elevation={4} sx={{ width: 400, height: 450, margin: "50px auto", padding: 2, textAlign: "center", borderRadius: 3}}>
        <div className="flex items-center justify-between">
          <Typography variant="h5"> MUI Calculator</Typography>
          <Button color="history" onClick={() => handleClick("h")} sx={{transition: "all 0.15s ease-in-out","&:active":{backgroundColor:"#1976d2",transform:"scale(0.95)",},}}><HistoryIcon sx={{ fontSize: 40 }}/></Button>
        </div>
        <TextField  fullWidth variant="outlined" value={input} inputProps={{readonly:true,sx:{color:"white" ,fontSize:"1.5rem"}}} sx={{ marginBottom: 2,}} />
        <Grid container spacing={1}>{buttons.map((btn) => (
            <Grid item xs={3} key={btn}>
              <Button variant="contained"  color={
                  ["+", "-", "*", "/", "="].includes(btn)
                    ? "warning" 
                    : btn === "C"
                    ? "error"
                    : "primary"
                }
                onClick={() => handleClick(btn)} sx={{transition: "all 0.15s ease-in-out","&:active":{backgroundColor:"#1976d2",transform:"scale(0.95)",},}}
              >{btn}</Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="error" onClick={() => handleClick("Backspace")} sx={{transition: "all 0.15s ease-in-out","&:active":{backgroundColor:"#1976d2",transform:"scale(0.95)",},}}>Clear</Button>
          </Grid>
        </Grid>
      </Paper>
      {showHistory && (
        <Paper sx={{width: 380,maxHeight: 350,height:1800, overflowY: "auto",position: "absolute",top: 60,left: "50%",transform: "translateX(-50%)",backgroundColor: "history",padding: 2,borderRadius: 2,zIndex: 10, marginTop:9}}>
          <Typography color="history" variant="h6">History</Typography>
          {history.length === 0 ? (
            <Typography variant="body2" color="history">No history yet</Typography>
          ) : (
            history.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ borderBottom: "1px solid #ccc",marginBottom: 1,paddingBottom: 0.5,}}>{item}</Typography>  
            ))
          )}
        </Paper>
      )}
    </div>
  );
}

export default Calculator;
