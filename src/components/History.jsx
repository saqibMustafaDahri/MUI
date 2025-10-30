import React from "react";
import {Paper,Typography}from "@mui/material";
function History({history}){
return(
    <Paper sx={{width: 370,maxHeight: 350,height:1800, overflowY: "auto",position: "absolute",top: 60,left: "50%",transform: "translateX(-50%)",backgroundColor: "history",padding: 2,borderRadius: 2,zIndex: 10, marginTop:10, border:1}}>
    <Typography color="history" variant="h6">History</Typography>
    {history.length === 0 ? (
      <Typography variant="body2" color="history">No history yet</Typography>
    ) : (
      history.map((item, index) => (
        <Typography key={index} variant="body1" sx={{ borderBottom: "1px solid #ccc",marginBottom: 1,paddingBottom: 0.5,}}>{item}</Typography>  
      ))
    )}
  </Paper>
);
}
export default History;