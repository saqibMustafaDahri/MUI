import React, { useState, useEffect } from "react";
import { Button, Paper, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";
import History from "./components/History";
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

  return (
    <div style={{ position: "relative" }}>
      <Paper elevation={4}sx={{ width: 400, height: 500, margin: "50px auto", padding: 2, textAlign: "center", borderRadius: 3,}}>
        <div className="flex items-center justify-between">
          <Typography variant="h5">MUI Calculator</Typography>
          <Button onClick={() => handleClick("h")} sx={{ transition: "all 0.15s ease-in-out", "&:active": { backgroundColor: "#1976d2", transform: "scale(0.95)",},}}>
            <HistoryIcon sx={{ fontSize: 40 }} />
          </Button>
        </div>

        <Display input={input} />
        <ButtonGrid onClick={handleClick} />
      </Paper>

      {showHistory && <History history={history} />}
    </div>
  );
}

export default Calculator;
